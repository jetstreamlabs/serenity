<?php

namespace Database\Seeders;

use App\Domain\Models\Permission;
use App\Domain\Models\Role;
use App\Domain\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\PermissionRegistrar;

class PermissionSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    app(PermissionRegistrar::class)->forgetCachedPermissions();

    $permissions = [
      //users
      'view-users',
      'create-users',
      'update-users',
      'delete-users',
      //teams
      'view-teams',
      'create-teams',
      'update-teams',
      'delete-teams',
      //roles
      'view-roles',
      'create-roles',
      'update-roles',
      'delete-roles',
      //permissions
      'view-permissions',
      'create-permissions',
      'update-permissions',
      'delete-permissions',
    ];

    foreach ($permissions as $name) {
      Permission::create(['name' => $name]);
    }

    Role::create(['name' => 'super-admin'])
      ->givePermissionTo(Permission::all());

    Role::create(['name' => 'admin'])
      ->givePermissionTo([
        'view-users',
        'create-users',
        'update-users',
        'view-teams',
        'create-teams',
        'update-teams',
        'delete-teams',
        'view-roles',
        'create-roles',
        'view-permissions',
        'create-permissions',
      ]);

    Role::create(['name' => 'editor'])
      ->givePermissionTo([
        'view-users',
        'view-teams',
        'create-teams',
        'update-teams',
        'view-roles',
        'view-permissions',
      ]);

    Role::create(['name' => 'member'])
      ->givePermissionTo([
        'view-users',
        'view-teams',
        'view-roles',
        'view-permissions',
      ]);

    app(PermissionRegistrar::class)->forgetCachedPermissions();

    $admin = User::where('username', 'secondman')->first();
    app(PermissionRegistrar::class)->setPermissionsTeamId($admin->current_team_id);
    $admin->assignRole(['super-admin', 'admin']);
  }
}
