<?php

namespace Database\Seeders;

use App\Domain\Models\Team;
use App\Domain\Models\User;
use App\Domain\Operations\CreateNewUser;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $user = User::create([
      'username' => 'secondman',
      'email' => 'admin@example.com',
      'password' => Hash::make('password'),
      'email_verified_at' => now(),
    ]);

    $user->ownedTeams()->save(Team::forceCreate([
      'user_id' => $user->id,
      'name' => $user->username."'s Team",
      'personal_team' => true,
    ]));

    $user->currentTeam();

    User::factory(10)
      ->withPersonalTeam()
      ->hasAttached(Team::factory()->count(3))
      ->create();
  }
}
