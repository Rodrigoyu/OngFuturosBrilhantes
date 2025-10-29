import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormGroup,FormBuilder,Validators, AbstractControl, ValidationErrors } from '@angular/forms';

function validaCPF(control:AbstractControl):ValidationErrors | null{

  const cpf = (control.value||'').replace(/[^\d]+/g, '');

  if(cpf.length !== 11|| /^(\d)\1{10}$/.test(cpf)){
    return {cpfInvalido:true};
  }

  let soma = 0;
  let resto;

  for (let i = 1; i <= 9; i++) {
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }
  
  resto = (soma * 10) % 11;

  if ((resto === 10) || (resto === 11)) {
    resto = 0;
  }

  // Verifica se o DV1 calculado é igual ao dígito do CPF
  if (resto !== parseInt(cpf.substring(9, 10))) {
    return { cpfInvalido: true };
  }

  // --- 3. Cálculo do Segundo Dígito Verificador (DV2) ---
  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  resto = (soma * 10) % 11;

  if ((resto === 10) || (resto === 11)) {
    resto = 0;
  }

  // Verifica se o DV2 calculado é igual ao dígito do CPF
  if (resto !== parseInt(cpf.substring(10, 11))) {
    return { cpfInvalido: true };
  }

  // --- 4. CPF é Válido ---
  // Se passou por todas as verificações, o CPF é válido
  return null;
}



@Component({
  standalone:true,
  selector: 'app-cadastro',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './cadastro.html',
  styleUrls: ['./cadastro.css'],

})


export class Cadastro {

  formCadastro: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formCadastro = this.fb.group({
      // Define os campos e suas regras de validação
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]], // 10 ou 11 dígitos
      cpf: ['', [Validators.required, validaCPF]], // <-- Aplicando nosso validador!
      mensagem: ['', [Validators.required]]
    });
  }

  // Função chamada no (ngSubmit) do formulário
  onSubmit() {
    // Marca todos os campos como "tocados" para exibir os erros, se houver
    this.formCadastro.markAllAsTouched();

    // Para o envio se o formulário for inválido
    if (this.formCadastro.invalid) {
      alert('Formulário inválido! Verifique os campos em vermelho.');
      return;
    }

    // Se chegou aqui, o formulário é válido
    alert('Cadastro enviado com sucesso! Agradecemos o seu interesse.');
    console.log(this.formCadastro.value); // Mostra os dados no console
    
    this.formCadastro.reset(); // Limpa o formulário
  }

}
