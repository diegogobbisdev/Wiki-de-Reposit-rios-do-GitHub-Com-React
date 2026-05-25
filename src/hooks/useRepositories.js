import { useState, useEffect } from 'react';
import { api } from '../services/api';

const STORAGE_KEY = 'github-repos-wiki';

export const useRepositories = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Carrega repositórios do localStorage ao montar
  useEffect(() => {
    const savedRepos = localStorage.getItem(STORAGE_KEY);
    if (savedRepos) {
      try {
        setRepos(JSON.parse(savedRepos));
      } catch (err) {
        console.error('Erro ao carregar repositórios salvos:', err);
      }
    }
  }, []);

  // Salva repositórios no localStorage sempre que mudam
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(repos));
  }, [repos]);

  const addRepository = async (repositoryName) => {
    // Validação básica
    if (!repositoryName.trim()) {
      setError('Por favor, insira um nome de repositório');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const { data } = await api.get(`repos/${repositoryName}`);

      // Verifica se o repositório já existe
      const alreadyExists = repos.some(repo => repo.id === data.id);
      if (alreadyExists) {
        setError('Este repositório já foi adicionado');
        return;
      }

      setRepos(prevRepos => [...prevRepos, data]);
    } catch (err) {
      if (err.response?.status === 404) {
        setError('Repositório não encontrado');
      } else {
        setError('Erro ao buscar repositório. Tente novamente.');
      }
      console.error('Erro na busca:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const removeRepository = (repoId) => {
    setRepos(prevRepos => prevRepos.filter(repo => repo.id !== repoId));
  };

  return {
    repos,
    isLoading,
    error,
    addRepository,
    removeRepository,
    clearError: () => setError(null)
  };
};
