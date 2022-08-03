const inputKette = document.forms[0].inputKette
const trennPos = document.forms[0].trennPos
const warning = document.getElementById('warnmeldung')
const textOutPart1 = document.getElementById('vordererTeil')
const textOutPart2 = document.getElementById('hintererTeil')
const radioDefault = document.getElementById('defaultText')


const trennen = () => {
    const inputValue = inputKette.value
    let trennValue = trennPos.value
    trennValue = ` ${trennValue} `
    let resultIndex = inputValue.search(trennValue)
    let woSchneiden = document.forms[0].radioWoTrennen.value
    console.log(woSchneiden)

    if (resultIndex == -1) {
        console.log('falsch')
        warning.innerHTML = 'Keine Übereinstimmung gefunden. Bitte nochmal überprüfen.'
        textOutPart1.innerHTML = inputValue

    } else {

        switch (woSchneiden) {

            case 'davor':
                textOutPart1.innerHTML = inputValue.slice(0, resultIndex)
                textOutPart2.innerHTML = inputValue.slice(resultIndex)
                break;
            case 'danach':
                textOutPart1.innerHTML = inputValue.slice(0, resultIndex + trennValue.length)
                textOutPart2.innerHTML = inputValue.slice(resultIndex + trennValue.length)
                break;
            default: radioDefault.innerHTML = 'Bitte wähle eine Option'
        }

    }
}