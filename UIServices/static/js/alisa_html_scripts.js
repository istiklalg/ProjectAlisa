/**
 * @author : istiklal
 */

function addNewAppForm(parentID, lastRow){
    var num = parseInt(lastRow.id.split("_")[1]) + 1;
    var newRow = lastRow.cloneNode(true);
    newRow.id = "formAppRow_"+num;
    document.getElementById(parentID).appendChild(newRow);
}
