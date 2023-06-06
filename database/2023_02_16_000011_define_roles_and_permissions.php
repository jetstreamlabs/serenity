<?php

use App\Domain\Models\Permission;
use App\Domain\Models\Role;
use Carbon\Carbon;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
  protected array $defaultPermissions = [
    // view admin as a whole
    'admin',

    // manage users (access)
    'admin.user.index',
    'admin.user.create',
    'admin.user.show',
    'admin.user.edit',
    'admin.user.destroy',
    'admin.user.impersonate',

    // api
    'admin.api.index',
    'admin.api.create',
    'admin.api.show',
    'admin.api.edit',
    'admin.api.destroy',

    // teams
    'admin.team.index',
    'admin.team.create',
    'admin.team.show',
    'admin.team.edit',
    'admin.team.destroy',

    // roles
    'admin.role.index',
    'admin.role.create',
    'admin.role.show',
    'admin.role.edit',
    'admin.role.destroy',

    // permissions
    'admin.permission.index',
    'admin.permission.create',
    'admin.permission.show',
    'admin.permission.edit',
    'admin.permission.destroy',
  ];

  public function up()
  {
    $permissions = collect($this->defaultPermissions);

    $adminRole = Role::create([
      'name' => 'admin',
      'created_at' => Carbon::now(),
      'updated_at' => Carbon::now(),
    ]);

    $permissions->each(function ($permission) use ($adminRole) {
      $adminPermission = Permission::create([
        'name' => $permission,
        'created_at' => Carbon::now(),
        'updated_at' => Carbon::now(),

      ]);

      DB::table('permission_role')->insert([
        'permission_id' => $adminPermission->id,
        'role_id' => $adminRole->id,
      ]);
    });

    // let's create a default Member role in case self-registration is enabled
    $guestRole = Role::create([
      'name' => 'member',
      'created_at' => Carbon::now(),
      'updated_at' => Carbon::now(),
    ]);

    DB::table('permission_role')->insert([
      'permission_id' => DB::table('permissions')
        ->where('name', '=', 'admin')
        ->value('id'),
      'role_id' => $guestRole->id,
    ]);

    app()['cache']->forget(config('permission.cache.key'));
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    $permissions = collect($this->defaultPermissions);

    $guestRole = DB::table('roles')->where('name', 'member')->first();

    DB::table('permission_role')
      ->where('role_id', $guestRole->id)
      ->delete();

    DB::table('roles')->where('id', $guestRole->id)->delete();

    $adminRole = DB::table('roles')->where('name', 'admin')->first();

    DB::table('permission_role')
      ->where('role_id', $adminRole->id)
      ->delete();

    DB::table('roles')->where('id', $adminRole->id)->delete();

    $permissions->each(function ($permission) {
      $permissionItem = DB::table('permissions')->where([
        'name' => $permission,
      ])->first();

      if ($permissionItem !== null) {
        DB::table('permissions')->where('id', $permissionItem->id)->delete();
        DB::table('model_permission')->where('permission_id', $permissionItem->id)->delete();
      }
    });

    app()['cache']->forget(config('permission.cache.key'));
  }
};
