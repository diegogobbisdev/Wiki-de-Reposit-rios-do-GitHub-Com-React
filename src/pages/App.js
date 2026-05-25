
import { useState } from 'react';
import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { useRepositories } from '../hooks/useRepositories';

import { Container, Header, SearchSection, RepositoriesList, ErrorMessage } from './styles';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const { repos, isLoading, error, addRepository, removeRepository, clearError } = useRepositories();

  // Trata a busca de repositório
  const handleSearchRepo = async () => {
    clearError();
    await addRepository(searchInput);
    setSearchInput('');
  };

  // Permite buscar ao pressionar Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSearchRepo();
    }
  };

  return (
    <Container>
      <Header>
        <img src={gitLogo} width={72} height={72} alt="GitHub logo"/>
      </Header>

      <SearchSection>
        <Input 
          value={searchInput} 
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Digite o repositório (ex: facebook/react)"
          disabled={isLoading}
        />
        <Button 
          onClick={handleSearchRepo}
          disabled={isLoading}
          isLoading={isLoading}
        />
      </SearchSection>

      {error && (
        <ErrorMessage>
          {error}
        </ErrorMessage>
      )}

      <RepositoriesList>
        {repos.length === 0 && !error && (
          <p className="empty-state">Nenhum repositório adicionado ainda</p>
        )}
        {repos.map(repo => (
          <ItemRepo 
            key={repo.id}
            repo={repo} 
            onRemove={() => removeRepository(repo.id)}
          />
        ))}
      </RepositoriesList>
    </Container>
  );
}

export default App;
