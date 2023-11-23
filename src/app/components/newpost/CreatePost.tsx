import axiosFetch from '@/app/axios/config';
import React from 'react';
import { useForm } from 'react-hook-form';

export interface Props{
  reloadPosts: () => void;
}

function CreatePost({reloadPosts}: Props) {
  const { register, handleSubmit, setValue, getValues, reset  } = useForm();

    const getPosts =  async () =>{
      try{
        const response = await axiosFetch.get("/posts")
        const data = response.data;

        
      } catch(error){
        console.log('erro', error)
      }
      console.log('chamei o useEffect')
  }
  const onSubmit = async (data: any) => {
    console.log('Dados do formulário a serem enviados:', data);

    try {
      const response = await axiosFetch.post("/post", data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Novo post cadastrado:', response.data);
      reset();
      reloadPosts()
    } catch (error: any) {
      console.error('Erro ao cadastrar novo post', error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-gray-c2 rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">Create a Post</h2>
        
        <div className="mb-4">
          <label className="block text-white pb-2">Content:</label>
          <textarea
            {...register("content")}
            rows={4}
            className="w-full px-3 py-2 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 resize-none"
            placeholder="Write a post..."
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-white pb-2">Nome:</label>
          <input
            type="text"
            {...register("author.name")}
            className="w-full px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Insira seu nome"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white pb-2">Profissão:</label>
          <input
            type="text"
            {...register("author.role")}
            className="w-full px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Insira sua profissão"
          />
        </div>

        <div className="mb-4">
          <label className="block text-white pb-2">Foto:</label>
          <input
            type="text"
            {...register("author.avatarUrl")}
            className="w-full px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="URL de imagem"
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
          type="submit"
        >
          Confirmar
        </button>
      </form>
    </>
  );
}

export default CreatePost;
