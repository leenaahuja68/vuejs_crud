<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('/storeItem', [MainController::class, 'storeItem'] );
Route::get('/getItems', [MainController::class, 'getItems'] );
Route::post('/deleteItem/{id}', [MainController::class, 'deleteItem'] );
Route::post('/edititem/{id}', [MainController::class, 'editItem'] );







