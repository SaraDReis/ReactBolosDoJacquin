import axios from "axios";
import type { Bolo } from "../types/Bolo";

export const getBolos = async (): Promise<Bolo[]> => {
  try {
    const resposta = await axios.get("http://localhost:3000/bolos");
    return resposta.data;
  } catch (error) {
    console.error("Erro ao buscar os dados: ", error);
    throw error;
  }
}

export const deleteBolo = async (idBolo: string): Promise<void> => {
  try {
    await axios.delete(`http://localhost:3000/bolos/${idBolo}`);
  } catch (error) {
    console.error("Erro ao deletar o bolo: ", error);
    throw error;
  }
}

export const enviarFotoParaAPI = async (file: File): Promise<string | undefined> => {
  const formData = new FormData();
  formData.append("file", file); //aqui vc nomeou o file de "file", ou seja seu nome é seu proprio valor, ele recebe a imagem, dá um nome e manda para a API

  //res significa resposta, é uma variavel //aqui ele vai enciar algo para esta rota http..upload
  try {
    const res = await axios.post("http://localhost:3000/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" } //cabeçalho da requisição, uma "carta" para a sua api, dica do oq está dentro
    });
    return res.data.fileName; //aqui ele puxa as informações dentro de res de forma especifica "dentro de data, o fileName"
  } catch (error) {
    console.error("Erro no upload da imagem", error);
    return undefined;
  }
}

export const postBolo = async (bolo: Bolo): Promise<void> => {
  try {
    await axios.post("http://localhost:3000/bolos", bolo);
  } catch (error) {
    console.error("Erro ao cadastrar o bolo", error);
    throw error;
  }
}
