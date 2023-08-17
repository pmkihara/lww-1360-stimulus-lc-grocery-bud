import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["itemsList", "input"]

  addToList(event) {
    // Evitar que o form faça o reload da página
    event.preventDefault()

    // Inserir o novo item na lista, criando uma tag nova para cada um. Cada
    // item será como uma nova instância que tem o ItemController.
    this.itemsListTarget.insertAdjacentHTML("beforeend",
    `<li class="list-group-item" data-controller='item'>
      <div data-item-target='name'>${this.inputTarget.value}</div>
      <div data-item-target='controls' class="d-flex gap-2">
        <button class="btn btn-info btn-sm" data-action='click->item#edit'>Edit</button>
        <button class="btn btn-danger btn-sm" data-action='click->item#delete'>Delete</button>
      </div>
      <div data-item-target='form' class="d-none">
        <input type="text" value=${this.inputTarget.value} class="form-control" data-item-target="input" />
        <button type="submit" class="btn btn-primary btn-sm" data-action="click->item#save">Save</button>
      </div>
    </li>`);

    // Apagar o valor do input após adicionar
    this.inputTarget.value = ''
  }
}
