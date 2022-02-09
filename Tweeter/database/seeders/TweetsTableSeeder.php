<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

Use App\Models\Tweet;

class TweetsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Let's truncate our existing records to start from scratch.
        Tweet::truncate();

        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 50; $i++) { 
            Tweet::create([
                'body' => $faker->text(),
                'image' => 'https://i.pravatar.cc/300',
                'user_id' => $faker->randomDigit(),
            ]);
        }
    }
}
