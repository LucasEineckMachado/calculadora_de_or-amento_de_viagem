// Função para calcular o orçamento da viagem
function calculateBudget() {
    // Coletando valores do formulário
    const days = parseInt(document.getElementById('days').value);
    const accommodation = document.getElementById('accommodation').value;
    const people = parseInt(document.getElementById('people').value);

    // Definindo custos por dia para cada tipo de acomodação
    let costPerDay;
    if (accommodation === 'economica') {
        costPerDay = 100;
    } else if (accommodation === 'moderada') {
        costPerDay = 200;
    } else {
        costPerDay = 400;
    }

    // Calculando o custo total
    const totalCost = days * costPerDay * people;

    // Exibindo o resultado
    document.getElementById('budget-output').innerText = `R$ ${totalCost.toFixed(2)}`;
}
