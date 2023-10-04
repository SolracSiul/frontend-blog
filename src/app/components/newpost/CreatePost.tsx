import axiosFetch from '@/app/axios/config';
import axios from 'axios';
import React, { useState } from 'react';

function CreatePost() {
  const formVazio = () => {
    return {
      content: '',
      author: {
        name: '',
        role: '',
        avatarUrl: '',
      },
    };
  };

  const [form, setForm] = useState(formVazio);

  const setValor = (evento: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evento.target;
    if (name === 'content') {
      setForm({
        ...form,
        [name]: value,
      });
    } else {
      setForm({
        ...form,
        author: {
          ...form.author,
          [name]: value,
        },
      });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(form);
    axiosFetch.post("/post", form).then(() =>{
      console.log('novo post cadastrado')
    })
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="p-6 bg-gray-c2 rounded-lg shadow-xl ">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">Create a Post</h2>
        <div className="mb-4">
          <label className="block text-white pb-2">Content:</label>
          <textarea
            onChange={setValor}
            value={form.content}
            id="content"
            name="content"
            rows={4}
            className="w-full px-3 py-2 text-black bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 resize-none"
            placeholder="Write a post..."
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-white pb-2">Nome:</label>
          <input
            type="text"
            name="name"
            onChange={setValor}
            value={form.author.name}
            className="w-full px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Insira seu nome"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white pb-2">Profissão:</label>
          <input
            type="text"
            name="role"
            onChange={setValor}
            value={form.author.role}
            className="w-full px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Insira sua profissão"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white pb-2">Foto:</label>
          <input
            type="text"
            name="avatarUrl"
            onChange={setValor}
            value={form.author.avatarUrl}
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
