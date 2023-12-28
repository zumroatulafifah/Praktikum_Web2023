<?php

namespace App\Http\Controllers;

use App\Http\Requests\productrequest;
use App\Http\Requests\updateproductrequest;
use App\Http\Resources\productcollection;
use App\Http\Resources\productresource;
use App\Models\products;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;

class productcontroller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $sql = products::all();

            if($sql->isEmpty()){
                return response()->json([
                    "status" => "success",
                    "message" => "No Products Found",
                    "data" => []
                ], 404);
            }

            $formattedDatas = new productcollection($sql);
            return response()->json([
                "status" => "success",
                "message" => "Product retrieved succesfully",
                "data" => $formattedDatas
            ], 200);
        } catch (Exception $e) { //kalo path nya salah
            return response()->json(["status" => "error", "message" => $e->getMessage()], 404);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(productrequest $request)
    {
        try {
            $validatedRequest = $request->validated();
            $sql = products::create($validatedRequest);
            $formattedDatas = new productresource($sql);
            return response()->json([
                "status" => "success",
                "message" => "Product created successfully",
                "data" => $formattedDatas
            ], 201);
        } catch (Exception $e) {
            return response()->json(["status" => "error", "message" => $e->getMessage()], 400);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $sql = products::findOrFail($id);
            $formattedDatas = new productresource($sql);
            return response()->json([
                "status" => "success",
                "message" => "Product retrieved successfully",
                "data" => $formattedDatas
            ], 200);
        } catch(ModelNotFoundException $e){
            return response()->json(["status" => "error", "message" => "Product not found"], 404);
        }catch (Exception $e) {
            return response()->json(["status" => "error", "message" => $e->getMessage()], 400);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(updateproductrequest $request, string $id)
    {
        try {
            $validatedRequest = $request->validated();
            $sql = products::findOrFail($id);
            $sql->update($validatedRequest);
            $sql->save();
            $formattedDatas = new productresource($sql);
            return response()->json([
                "status" => "success",
                "message" => "Product Update Successfully",
                "data" => $formattedDatas
            ], 200);
        } catch(ModelNotFoundException $e){
            return response()->json(["status" => "error", "message" => "Product not found"], 404);
        } catch (Exception $e) {
            return response()->json(["status" => "error", "message" => $e->getMessage()], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $sql = products::findOrFail($id);
            $sql->delete();
            $formattedDatas = new productresource($sql);
            return response()->json([
                "status" => "success",
                "message" => "Product deleted successfully",
                "data" => $formattedDatas
            ], 200);
        } catch(ModelNotFoundException $e){
            return response()->json(["status" => "error", "message" => "Product not found"], 404);
        } catch (Exception $e) {
            return response()->json(["status" => "error", "message" => $e->getMessage()], 400);
        }
    }
}
