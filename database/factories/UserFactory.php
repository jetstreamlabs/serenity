<?php

namespace Database\Factories;

use App\Domain\Models\Team;
use App\Domain\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Serenity\Foundation\Features;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Domain\Models\User>
 */
class UserFactory extends Factory
{
  /**
   * The name of the factory's corresponding model.
   *
   * @var string
   */
  protected $model = User::class;

  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    return [
      'id' => app(config('snowflake.instance'))->id(),
      'username' => $this->faker->userName(),
      'fname' => $this->faker->firstName(),
      'lname' => $this->faker->lastName(),
      'email' => $this->faker->unique()->safeEmail(),
      'email_verified_at' => now(),
      'password' => Hash::make('password'), // password
    ];
  }

  /**
   * Indicate that the model's email address should be unverified.
   *
   * @return $this
   */
  public function unverified(): static
  {
    return $this->state(function (array $attributes) {
      return [
        'email_verified_at' => null,
      ];
    });
  }

  /**
   * Indicate that the user should have a personal team.
   *
   * @return $this
   */
  public function withPersonalTeam(): static
  {
    if (! Features::hasTeamFeatures()) {
      return $this->state([]);
    }

    return $this->has(
      Team::factory()
          ->state(function (array $attributes, User $user) {
            return ['name' => $user->username.'\'s Team', 'user_id' => $user->id, 'personal_team' => true];
          }),
      'ownedTeams'
    );
  }
}
