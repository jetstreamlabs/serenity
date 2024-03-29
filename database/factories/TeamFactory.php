<?php

namespace Database\Factories;

use App\Domain\Models\Team;
use App\Domain\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Domain\Models\Team>
 */
class TeamFactory extends Factory
{
  /**
   * The name of the factory's corresponding model.
   *
   * @var string
   */
  protected $model = Team::class;

  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    return [
      'id' => app(config('snowflake.instance'))->id(),
      'name' => $this->faker->unique()->company(),
      'user_id' => User::factory(),
      'personal_team' => true,
    ];
  }
}
