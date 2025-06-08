<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory;

    protected $fillable = ['title', 'description', 'price'];

    public function displayImage(): Attribute
    {
        return Attribute::get(function () {
            if (!$this->image || parse_url($this->image, PHP_URL_SCHEME)) {
                return $this->image;
            }
            return Storage::url($this->image);
        });
    }
}
