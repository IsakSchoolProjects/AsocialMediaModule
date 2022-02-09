<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Run `php artisan db:seed` to seed the database with both Seeders
        $this->call(TweetsTableSeeder::class);
        $this->call(UsersTableSeeder::class);
    }
}
