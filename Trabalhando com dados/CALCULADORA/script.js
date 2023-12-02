import java.util.Scanner;

public class Calculadora {

    public static void main(String[] args) {
        // Entrada de dados
        Scanner scanner = new Scanner(System.in);
        System.out.print("Informe o primeiro número: ");
        int num1 = scanner.nextInt();
        System.out.print("Informe o segundo número: ");
        int num2 = scanner.nextInt();

        // Menu de opções
        System.out.println("Escolha uma operação:");
        System.out.println("[1] - Soma");
        System.out.println("[2] - Subtração");
        System.out.println("[3] - Divisão");
        System.out.println("[4] - Multiplicação");

        int escolhaUser = scanner.nextInt();

        // Processamento
        int resultado = 0;

        switch (escolhaUser) {
            case 1:
                resultado = num1 + num2;
                System.out.println("A soma de " + num1 + " e " + num2 + " é: " + resultado);
                break;
            case 2:
                resultado = num1 - num2;
                System.out.println("A subtração de " + num1 + " por " + num2 + " é: " + resultado);
                break;
            case 3:
                if (num2 != 0) {
                    resultado = num1 / num2;
                    System.out.println("A divisão de " + num1 + " por " + num2 + " é: " + resultado);
                } else {
                    System.out.println("Não é possível dividir por zero.");
                }
                break;
            case 4:
                resultado = num1 * num2;
                System.out.println("A multiplicação de " + num1 + " por " + num2 + " é: " + resultado);
                break;
            default:
                System.out.println("Opção inválida");
        }

        scanner.close();
    }
}