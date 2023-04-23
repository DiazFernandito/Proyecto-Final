
/* Función para generar PDF del cupón de Suscripción */
function generarPDF(p1) { 
    /* Variable con el nombre del cliente */
    let nombreDelCliente = p1.toUpperCase() ;
    /* La constante doc hereda propiedades, métodos y eventos de jsPDF */
    const { jsPDF } = window.jspdf ;
    const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [210, 297]
        }) ;

    /* Felicitaciones*/
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("¡ FELICITACIONES POR TU SUSCRIPCIÓN !", 105, 20, null, null, "center") ;

    /* Nombre y líneas */
    doc.setDrawColor(255, 0, 0);
    doc.setLineWidth(1);
    doc.line(50, 27, 160, 27);            
    doc.setFontSize(15);
    doc.setFont("times", "normal");
    doc.text(nombreDelCliente, 105, 35, null, null, "center") ;
    doc.setLineWidth(1);
    doc.line(50, 40, 160, 40);            

    /* logo */
    doc.addImage(".\/pictures\/colibri-png.png", "PNG", 70, 45);

    /* Porcentaje de descuento */
    doc.setFontSize(12);
    doc.setFont("courier", "bold");
    doc.text("Te ganaste un Descuento de:", 105, 135, null, null, "center");
    doc.setFontSize(30);
    doc.setFont("courier", "bold");
    doc.text("5%", 105, 148, null, null, "center");
    doc.setFontSize(12);
    doc.setFont("courier", "bold");
    doc.text("Presentando este cupón", 105, 157, null, null, "center");
    doc.text("en cualquiera de nuestras sucursales", 105, 162, null, null, "center");

    /* Validez del cupón */
    doc.setFontSize(8);
    doc.setFont("helvetica", "italic");
    doc.text("(*) Válido hasta el 31/08/2023", 105, 170, null, null, "center");

    /* Recuadro */
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.2);
    doc.setLineDash([2.5]);
    doc.rect(40, 10, 130, 170);

    /* Guarda el cupón */
    doc.save("cupon.pdf") ;

    /* Final*/
    return ;
}
