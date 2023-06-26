<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'Superman Returns',
                'slug' => 'superman-returns',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=gKrGjD7ItsQ',
                'thumbnail' => 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS2CZgJV_eSnJakoCvx6CLcqnFk85xvJYNpxmjuLzrdnsAkVvdl',
                'rating' => 4.3,
                'is_featured' => 1,
            ],
            [
                'name' => 'King Kong',
                'slug' => 'kingkong',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=AYaTCPbYGdk',
                'thumbnail' => 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcScKmbrbsydfII7jY2nhc9Qo8YYFRk0TFaydwrArnP1pf1A6l76',
                'rating' => 4.3,
                'is_featured' => 0,
            ],
            [
                'name' => 'Dune',
                'slug' => 'dune',
                'category' => 'Scifi',
                'video_url' => 'https://www.youtube.com/watch?v=n9xhJrPXop4',
                'thumbnail' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJznVehDbSUPihJbSTNwH8Tgnvh4ZDxs0J4hV06wOvHHidHul',
                'rating' => 4.5,
                'is_featured' => 0,
            ],
        ];
        Movie::insert($movies);
    }
}
