public class CalculadoraIdade {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Solicita ao usuário a entrada da idade em anos
        
        System.out.print("Digite a idade em anos: ");
        int idadeEmAnos = scanner.nextInt();

        // Calcula a idade em diferentes unidades de tempo
        
        int idadeEmMeses = idadeEmAnos * 12;
        int idadeEmDias = idadeEmAnos * 365;  // Considerando anos com 365 dias
        int idadeEmHoras = idadeEmDias * 24;
        int idadeEmMinutos = idadeEmHoras * 60;

        // Exibe os resultados
        
        System.out.println("Idade em meses: " + idadeEmMeses + " meses");
        System.out.println("Idade em dias: " + idadeEmDias + " dias");
        System.out.println("Idade em horas: " + idadeEmHoras + " horas");
        System.out.println("Idade em minutos: " + idadeEmMinutos + " minutos");
    }
}