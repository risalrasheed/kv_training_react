import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Define a service using a base URL and expected endpoints
export const employeeApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
  endpoints: (builder) => ({
    getEmployeeById: builder.query({
      query: (id) => `employee/${id}`,
    }),
    getAllEmployee: builder.query({
      query: () => `employee`,
      providesTags: ["employee"], //the data we feteched will be cached with the "employee" as a key
    }),
    createEmployee: builder.mutation({
      query: (formvalues) => ({
        url: `employee`,
        method: "POST",
        body: formvalues,
      }),
      invalidatesTags: ["employee"], //when we update the earlier data we cached will not be updated ,only the database will be updated,so we should alse update the cache,to do that we are doing this,this will invalidate the current cache and create a new cache with the same key and new data from the database
    }),
    deleteEmployeeById: builder.mutation({
      query: (id) => ({
        url: `employee/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["employee"], //when we update the earlier data we cached will not be updated ,only the database will be updated,so we should alse update the cache,to do that we are doing this,this will invalidate the current cache and create a new cache with the same key and new data from the database
    }),
    updateEmployeeById: builder.mutation({
      query: ({id,formvalues }) => ({
        //when receiving multiple paramters u cannot give a,b .....it will accept only one ,therfore give it as an object
        url: `employee/${id}`,
        method: "PUT",
        body: formvalues,
      }),
      invalidatesTags: ["employee"], //when we update the earlier data we cached will not be updated ,only the database will be updated,so we should alse update the cache,to do that we are doing this,this will invalidate the current cache and create a new cache with the same key and new data from the database
    }),
  }),
});
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllEmployeeQuery,
  useCreateEmployeeMutation,
  useDeleteEmployeeByIdMutation,
  useGetEmployeeByIdQuery,
  useUpdateEmployeeByIdMutation,
} = employeeApi;