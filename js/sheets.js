let alumnosData;
async function getAlumnos() {
    let response;
    try {
        response = await gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: '1mNH90A-y_lTAl3b0YqftEyxPn8i36AguNBFOStVY0jU',
            range: 'DatosAlumnos',
        });
    } catch (err) {
        console.error(err);
        return;
    }
    const range = response.result;
    if (!range || !range.values || range.values.length == 0) {
        console.warn("No se encontraron valores");
        return;
    }
    

    alumnosData = [];
    range.values.forEach(alumno => {
        const datosAlumno = {   //datos en las columnas de la sheet correspondientes
            ID: alumno[19],
            nombre: alumno[1],
            comedorUser: alumno[18],
            alergia: alumno[20],
            curso: alumno[15],
            grupo: alumno[16],
            etapa: alumno[17],
        }
        alumnosData.push(datosAlumno);
    });

    console.log(alumnosData);
}
