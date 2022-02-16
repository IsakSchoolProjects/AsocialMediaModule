<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

Use App\Models\Comment;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Comment::truncate();

        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 50; $i++) { 
            Comment::create([
                'body' => $faker->text(),
                'user_id' => $faker->numberBetween($min = 10, $max = 50),
                'commented' => '',
            ]);
        }
    }
}
