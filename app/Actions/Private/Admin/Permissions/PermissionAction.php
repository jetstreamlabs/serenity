<?php

namespace App\Actions\Private\Admin\Permissions;

use App\Domain\Models\Permission;
use App\Domain\Models\Role;
use Illuminate\Support\Arr;
use Inertia\Inertia;
use Serenity\Foundation\Action;
use Serenity\Requests\Admin\Permissions\IndexPermissionRequest;
use Serenity\Requests\Admin\Permissions\UpdatePermissionRequest;

class PermissionAction extends Action
{
  public function index(IndexPermissionRequest $request)
  {
    // column with permissions names
    $allPermissions = Permission::all()->map->name;
    $permissionsTree = [];

    collect($allPermissions)->each(function ($permission) use (&$permissionsTree) {
      Arr::set($permissionsTree, $permission, $permission);
    });

    // column for roles
    $rolesPermissions = Role::with('permissions')->get();

    $roleTree = $rolesPermissions->map(function ($role) {
      return ['id' => $role['id'], 'name' => $role['name'], 'permissions' => $role->permissions->map->name];
    });

    return Inertia::render('Permissions/Index', [
      'roles' => $roleTree,
      'permissions' => $permissionsTree,
    ]);
  }

  public function update(UpdatePermissionRequest $request)
  {
    $validated = $request->validated();

    collect($validated['roles'])->each(function ($role) {
      $currentRole = Role::find($role['id']);

      $currentRole->syncPermissions($role['permissions']);
    });

    return redirect()->back()->with(['message' => ___('builder', 'Permissions have been successfully updated')]);
  }
}
