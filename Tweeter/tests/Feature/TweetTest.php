<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Tweet;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Database\Eloquent\Factories\Factory;
use Tests\TestCase;

class TweetTest extends TestCase
{
    public function testsTweetsAreCreatedCorrectly()
    {
        $user = factory(User::class)->create();
        $token = $user->generateToken();
        $headers = ['Authorization' => "Bearer $token"];
        $payload = [
            'title' => 'Lorem',
            'body' => 'Ipsum',
        ];

        $this->json('POST', '/api/tweets', $payload, $headers)
            ->assertStatus(200)
            ->assertJson([ 'id' => 1, 'title' => 'Lorem', 'body' => 'Ipsum' ]);
    }

    public function testsTweetsAreUpdatedCorrectly()
    {
        $user = factory(User::class)->create();
        $token = $user->generateToken();
        $headers = ['Authorization' => "Bearer $token"];
        $tweet = factory(Tweet::class)->create([
            'title' => 'First Tweet',
            'body' => 'First Body',
        ]);

        $payload = [
            'title' => 'Lorem',
            'body' => 'Ipsum',
        ];

        $response = $this->json('PUT', '/api/tweets/' . $tweet->id, $payload, $headers)
            ->assertStatus(200)
            ->assertJson([ 'id' => 1, 'title' => 'Lorem', 'body' => 'Ipsum' ]);
    }

    public function testsTweetsAreDeletedCorrectly()
    {
        $user = factory(User::class)->create();
        $token = $user->generateToken();
        $headers = ['Authorization' => "Bearer $token"];
        $tweet = factory(Tweet::class)->create([
            'title' => 'First Tweet',
            'body' => 'First Body',
        ]);

        $this->json('DELETE', '/api/tweets/' . $tweet->id, [], $headers)
            ->assertStatus(204);
    }

    public function testTweetsAreListedCorrectly()
    {
        factory(Tweet::class)->create([
            'title' => 'First Tweet',
            'body' => 'First Body'
        ]);

        factory(Tweet::class)->create([
            'title' => 'Second Tweet',
            'body' => 'Second Body'
        ]);

        $user = factory(User::class)->create();
        $token = $user->generateToken();
        $headers = ['Authorization' => "Bearer $token"];

        $response = $this->json('GET', '/api/tweets', [], $headers)
            ->assertStatus(200)
            ->assertJson([
                [ 'title' => 'First Tweet', 'body' => 'First Body' ],
                [ 'title' => 'Second Tweet', 'body' => 'Second Body' ]
            ])
            ->assertJsonStructure([
                '*' => ['id', 'body', 'title', 'created_at', 'updated_at'],
            ]);
    }

    public function testUserCantAccessTweetsWithWrongToken()
    {
        factory(Tweet::class)->create();
        $user = factory(User::class)->create([ 'email' => 'user@test.com' ]);
        $token = $user->generateToken();
        $headers = ['Authorization' => "Bearer $token"];
        $user->generateToken();

        $this->json('get', '/api/tweets', [], $headers)->assertStatus(401);
    }

    public function testUserCantAccessTweetsWithoutToken()
    {
        factory(Tweet::class)->create();

        $this->json('get', '/api/tweets')->assertStatus(401);
    }
}
