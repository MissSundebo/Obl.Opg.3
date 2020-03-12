
let udførButton: HTMLButtonElement = <HTMLButtonElement> document.getElementById("submit");
udførButton.addEventListener("click", UdførButton)

function UdførButton() : void {
let inputField: HTMLInputElement = <HTMLInputElement>document.getElementById("inputField");
let inputFieldString: string = inputField.value;

let CaseOption: HTMLInputElement = <HTMLInputElement> document.getElementById("choice");
let CaseOptionValue: string = CaseOption.value.toString();

let Result: string;

if(CaseOptionValue == "UpperCase")
{
    Result = inputFieldString.toUpperCase();

    let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
            element.innerHTML = Result;
}
else if(CaseOptionValue == "LowerCase"){
    Result= inputFieldString.toLowerCase();

    let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content")
        element.innerHTML = Result;
}

}