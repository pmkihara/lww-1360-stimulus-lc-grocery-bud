import { Controller } from "stimulus";

export default class extends Controller {
  // Este controller vai ser instanciado para cada um dos itens adicionados na
  // lista. Isto permite que cada controller terá somente 1 target de cada tipo
  // (cada item terá o seu próprio conjunto de botões, form, input, name)
  static targets = ['name', 'controls', 'input', 'form']

  delete() {
    // Remover o item inteiro
    // (this.element se refere à tag que leva o data-controller)
    this.element.remove()
  }

  edit() {
    // Ocultar o nome e os botões de edit e delete
    // Mostrar a div com o input e o botão de save
    this.nameTarget.classList.add('d-none')
    this.controlsTarget.classList.add('d-none')
    this.formTarget.classList.remove('d-none')
  }

  save() {
    // Mostrar o nome e os botões de edit e delete
    // Ocultar a div com o input e o botão de delete
    // Alterar o texto que tem o nome do item para o novo valor
    this.nameTarget.classList.remove('d-none')
    this.controlsTarget.classList.remove('d-none')
    this.formTarget.classList.add('d-none')
    this.nameTarget.innerText = this.inputTarget.value;
  }
}
