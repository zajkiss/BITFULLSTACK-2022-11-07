<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductsController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

//CRUD
//CREATE - POST
//READ   - GET
//UPDATE - PUT
//DELETE - DELETE

Route::group(['prefix'=>'products'],function(){
    Route::get('/', [ProductsController::class, 'index']);
    Route::get('/s/{keyword}', [ProductsController::class, 'search']);
    Route::post('/', [ProductsController::class, 'create']);
    Route::put('/{id}', [ProductsController::class, 'edit']);
    Route::get('/{id}', [ProductsController::class, 'result']);



    Route::delete('/{id}', [ProductsController::class, 'delete'])->where('id', '[0-9]+');
});
