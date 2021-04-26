function Pilha() {

    let itensPilha = [];

    this.push = function () {
        const value = document.getElementById("valorAddPilha").value;

        if (!value) {
            alert("Informe um valor para adicionar !");
            return false;
        }

        itensPilha.push(value);
        this.createItemStack(value);
        document.getElementById("valorAddPilha").value = "";

        this.updateDataStack();

    }

    this.pop = function () {
        const lastIndexStack = document.getElementById(itensPilha.length);
        lastIndexStack.remove();

        itensPilha.pop();
        this.updateDataStack();
    }

    this.clean = function () {
        document.getElementById("pilha").innerHTML = "";
        itensPilha = [];
        this.updateDataStack();
    }

    this.createItemStack = function (value) {
        let elementoPilha = document.getElementById("pilha");

        const divItem = document.createElement("div");
        const textElement = document.createTextNode(`${value}`);

        const attributeClass = document.createAttribute("class");
        const attributeId = document.createAttribute("id");

        attributeClass.value = "item";
        attributeId.value = itensPilha.length;

        divItem.appendChild(textElement);
        divItem.setAttributeNode(attributeClass);
        divItem.setAttributeNode(attributeId);

        elementoPilha.prepend(divItem);
    }

    this.updateDataStack = function () {
        document.getElementById("tamanhoPilha").innerHTML = itensPilha.length;

        let topoPilha = itensPilha[itensPilha.length - 1];
        !topoPilha && (topoPilha = "");

        document.getElementById("topoPilha").innerHTML = topoPilha;
    }
}

const pilha = new Pilha();