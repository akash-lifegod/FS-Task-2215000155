function showTeacher(subject) {
    const teacher = {
        'MACHINE LEARNING': '<b>Jagjeet Kumar</b> - jagjeetkumar@gla.ac.in<br><br>Room: AB1 201, Contact: 9999999999',
        'THEORY OF AUTOMATA': '<b>Shubham Shukla</b> - shubham.shukla@gla.ac.in<br><br>Room: AB9 106, Contact: 9999999999',
        'AGILE SOFTWARE DEVELOPMENT': '<b>Madhu Sudan Kumar</b> - madhusudan.kumar@gla.ac.in<br><br>Room: AB3 301, Contact: 9999999999',
        'QUANT AND APTITUDE': '<b>Ayush Gupta</b> - ayush.gupta@gla.ac.in<br><br>Room: AB3 202, Contact: 9999999999',
        'GROUP DISCUSSION': '<b>Dr. Anjali Mehra</b><br><br>Room: AB1 403, Contact: 9999999999',
        'MACHINE LEARNING LAB': '<b>Jagjeet Kumar</b> - jagjeetkumar@gla.ac.in<br><br>Room: AB1 202, Contact: 9999999999',
        'DATA STRUCTURES AND ALGORITHM': '<b>Sohil Khan</b> - sohil.khan@gla.ac.in<br><br>Room: AB1 413, Contact: 9999999999',
        'FULL_STACK': '<b>Shiv Kumar Verma</b> - shivkumar.verma@gla.ac.in<br><br>Room: AB9 109, Contact: 9999999999'
    };

    
    document.getElementById('details').innerHTML = teacher[subject];
    document.getElementById('teacher').style.display = 'flex';
}

function closeModal() {
    document.getElementById('teacher').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('teacher');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
