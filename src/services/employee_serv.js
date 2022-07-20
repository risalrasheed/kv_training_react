import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const employeeApi = createApi({
    reducerPath: 'employeeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
    endpoints: (builder) => ({
      getAllEmployee: builder.query({
        // query: (name) => `pokemon/${name}`,
        query: () => `employee/`,
        providesTags: ["emp_reload"]
      }),
      getAnEmployee: builder.query({
        
        query: (emp_id) => `employee/${emp_id}`,
        providesTags: ["emp_reload"]
      }),
      createEmployee: builder.mutation({
        query: (details) => ({
          url: 'employee/',
          method: 'POST',
          body: details,
        }),
        invalidatesTags: ["emp_reload"]
      }),
      deleteEmployee: builder.mutation({
        query: (id) => ({
          url: `employee/${id}`,
          method: 'DELETE',
          body: id,
        }),
        invalidatesTags: ["emp_reload"]
      })
    }),
  })


  export const { 
    useGetAllEmployeeQuery ,
    useGetAnEmployeeQuery ,
    useCreateEmployeeMutation,
    useDeleteEmployeeMutation,
  } = employeeApi