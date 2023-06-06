<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('users', function (Blueprint $table) {
      $table->unsignedBigInteger('id')->primary();
      $table->string('username')->unique();
      $table->string('fname')->nullable();
      $table->string('lname')->nullable();
      $table->string('email')->unique();

      $table->string('password');
      $table->rememberToken();
      $table->foreignId('current_team_id')->nullable();
      $table->string('profile_photo_path', 2048)->nullable();
      $table->boolean('active')->default(true);
      $table->timestamp('email_verified_at')->nullable();
      $table->timestamp('last_active_at')->nullable();
      $table->timestamp('created_at')->useCurrent();
      $table->timestamp('updated_at')->useCurrent();
      $table->softDeletes();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('users');
  }
};
