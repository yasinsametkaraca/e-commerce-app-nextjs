"use client"
import React, {useCallback} from 'react'
import {Product} from "@prisma/client";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {deleteObject, getStorage, ref} from "firebase/storage";
import firebaseApp from "@/libs/firebase";
import axios from "axios";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";

interface  ManageProductProps {
    products: Product[]
}
const ManageProduct: React.FC<ManageProductProps> = ({products}) => {

    const storage = getStorage(firebaseApp)
    const router = useRouter()
    let rows: any = []
    if(products) {
        rows = products.map((product) => {
            return {
                id: product.id,
                name: product.name,
                price: product.price,
                category: product.category,
                brand: product.brand,
                inStock: product.inStock,
                image: product.image
            }
        })
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'category', headerName: 'Category', width: 130 },
        { field: 'brand', headerName: 'Brand', width: 130 },
        {
            field: 'inStock',
            headerName: 'In Stock',
            width: 130,
            renderCell: (params) => {
                return (
                    <div>
                        {params.row.inStock ? "Stock" : "No Stock"}
                    </div>
                )
            }
        },
        { field: 'image', headerName: 'Image', width: 130 },
        {
            field: 'actions',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => {
                return (
                    <button onClick={() => handleDelete(params.row.id, params.row.image)} className="text-red-600 cursor-pointer">
                        Delete
                    </button>
                )
            }
        },
    ];

    const handleDelete = useCallback(async (id: string, image: any) => {
       const deleteProductImage = async () => {
           try {
               const imageRef = ref(storage, image)
               await deleteObject(imageRef)
           } catch (error) {
               return console.log(error)
           }
       }
       await deleteProductImage()
       axios.delete(`/api/product/${id}`)
           .then((res) => {
                toast.success("Product deleted successfully")
                router.refresh()

           }).catch((err: any) => {
                console.log(err)
           })
    }, [])


    return (
        <div>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    )
}
export default ManageProduct
