const chamada = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário
  
    console.log("Enviando dados para o backend...");
  
    // Captura os dados do formulário
    const formData = new FormData(event.currentTarget); // Captura os inputs
    const dados = {
      nome: formData.get("nomehtml"), // "nomehtml" deve coincidir com o atributo "name" no input
      sobrenome: formData.get("sobrenomehtml"), // "sobrenomehtml" deve coincidir com o atributo "name"
    };
  
    try {
      // POST Request
      const response = await fetch("http://127.0.0.1:8000/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Define que estamos enviando JSON
        },
        body: JSON.stringify(dados), // Converte os dados para JSON
      });
  
      // Verifica a resposta
      if (response.ok) {
        const data = await response.json(); // Extrai o JSON da resposta
        console.log("Resposta do backend:", data); // Exibe a resposta no console
      } else {
        console.error("Erro na requisição:", response.status); // Exibe o status do erro
      }
    } catch (error) {
      console.error("Erro ao conectar com o backend:", error); // Trata erros de conexão
    }
  };
  
  export default chamada;
  