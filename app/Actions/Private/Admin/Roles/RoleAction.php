<?php

namespace App\Actions\Private\Admin\Roles;

use App\Domain\Models\Permission;
use App\Domain\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Inertia\Inertia;
use Serenity\Foundation\Action;
use Serenity\Queries\Filters\FuzzyFilter;
use Serenity\Requests\Admin\Roles\IndexRoleRequest;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class RoleAction extends Action
{
  public function index(IndexRoleRequest $request)
  {
    $roles = QueryBuilder::for(Role::class)
        ->allowedFilters([
          AllowedFilter::custom('search', new FuzzyFilter(
            'id',
            'name',
          )),
        ])
        ->defaultSort('id')
        ->allowedSorts(['id', 'name'])
        ->with('users')
        ->select(['id', 'name'])
        ->paginate(request()->get('per_page'))->withQueryString();

    return Inertia::render('Roles/Index', [
      'roles' => $roles,
    ]);
  }

  public function edit(Role $role)
  {
    $this->authorize('builder.role.edit');

    $allPermissions = Permission::all()->map->name;
    $assignedPermissions = $role->permissions->map->name;

    $permissionsTree = [];

    collect($allPermissions)->each(function ($permission) use (&$permissionsTree, $assignedPermissions) {
      $isAssigned = collect($assignedPermissions)->contains($permission);
      Arr::set($permissionsTree, $permission, $isAssigned);
    });

    return Inertia::render('Roles/Edit', [
      'role' => $role,
      'permissionsTree' => $permissionsTree,
    ]);
  }

  public function update(Role $role, Request $request)
  {
    $this->authorize('builder.role.edit');

    $role->syncPermissions(collect(Arr::dot($request->input('permissionsTree')))->filter()->keys());

    return redirect()->back()->with(['message' => ___('builder', 'Role has been successfully updated')]);
  }
}
