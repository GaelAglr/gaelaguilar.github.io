
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});

/*Parallax sol*/
const solucion = document.querySelector(".solucion");
window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    solucion.style.backgroundPositionY = offset * 0.3 + "px";
});




/* */
document.addEventListener("DOMContentLoaded", () => {

    const card1 = document.querySelector("#card-1");
    const btn1 = document.querySelector("#btn-1");

    window.addEventListener("scroll", () => {

        const scrollY = window.scrollY;
        const vh = window.innerHeight;
        const fadeEndCard = vh * 1;
        let opacityCard = 1 - (scrollY / fadeEndCard);
        if(opacityCard < 0) opacityCard = 0;
        const fadeStartBtn = vh * 0.2;
        const fadeEndBtn = vh * 1;
        let opacityBtn = 1;
        if(scrollY >= fadeStartBtn){
            opacityBtn = 1 - ((scrollY - fadeStartBtn) / (fadeEndBtn - fadeStartBtn));
        }
        if(opacityBtn < 0) opacityBtn = 0;
        card1.style.opacity = opacityCard;
        btn1.style.opacity = opacityBtn;
        card1.style.transform = `translateY(${scrollY * 0.08}px)`;
        btn1.style.transform = `translateY(${scrollY * -0.15}px)`;
    });
});

//Navegacion
const navLinks = document.querySelectorAll('.navbar ul li a');
function actualizarEnlaceActivo() {
    let currentSection = '';

    document.querySelectorAll('section').forEach((section) => {
        const sectionTop = section.offsetTop - 100; 
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id'); 
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('activo'); 
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('activo'); 
        }
    });
}


const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
});

document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        toggle.classList.remove('active');
    });
});


/* */
document.addEventListener('DOMContentLoaded', () => {
    const chatDisplay = document.getElementById('chat-display');
    const chatInputField = document.getElementById('chat-input-field');
    const chatSendButton = document.getElementById('chat-send-button');

    if (!chatDisplay || !chatInputField || !chatSendButton) {
        console.error('No se encontraron todos los elementos necesarios del chatbot.');
        return;
    }

    const responses = {
        saludo: [
            '¡Hola! ¿En qué puedo ayudarte?',
            '¡Hola! ¿Cómo estás? ¿Qué necesitas saber?',
            '¡Hola! ¿En qué puedo asistirte hoy?',
        ],
        contacto: [
            'Mis datos de contacto son:\nCorreo: gaelnn10@gmail.com\nTeléfono: 55 6528 5694.',
            'Puedes contactarme por correo en **gaelnn10@gmail.com** o al número **55 6528 5694**.',
            'Si necesitas contactarme, mi correo es gaelnn10@gmail.com y mi teléfono es 55 6528 5694.',
        ],
        habilidades: [
            'Tengo un dominio avanzado de C# en aplicaciones de escritorio y web bajo arquitectura MVC. También manejo JavaScript, algo de Python, ANSI C y Java. Mi especialidad es el desarrollo full stack, trabajando tanto en frontend como backend. Además, tengo un buen manejo de bases de datos utilizando SQL Server.',
            'Mis habilidades técnicas incluyen C# (mi lenguaje principal), JavaScript, Python, ANSI C, y algo de Java. También soy competente en el manejo de bases de datos con SQL Server y tengo experiencia desarrollando sistemas completos desde cero.',
        ],
        trabajo_en_equipo: [
            'Disfruto trabajar en equipo y tengo buen liderazgo, sin que esto afecte mi capacidad para colaborar en equipos diversos. Soy respetuoso, empático y me comunico eficazmente para lograr los objetivos.',
            'Soy alguien que trabaja bien en equipo, con habilidades de comunicación, empatía y respeto. También considero que mi liderazgo es positivo y favorece la colaboración entre los miembros del equipo.',
        ],
        metas: [
            'Entre mis objetivos está mejorar continuamente mis habilidades actuales, explorar más sobre Inteligencia Artificial y adquirir experiencia en áreas como el desarrollo de aplicaciones móviles. A largo plazo, quiero ser más eficiente y versátil en el uso de tecnologías avanzadas.',
            'Mi meta principal es aprender nuevas tecnologías y optimizar mi capacidad para desarrollar sistemas complejos. Me gustaría enfocarme más en la Inteligencia Artificial y aplicaciones móviles en el futuro.',
        ],
        servicios: [
            'Ofrezco la creación de sistemas completos desde cero, incluyendo diseño, funcionamiento, bases de datos, y cualquier funcionalidad necesaria. También puedo realizar reparaciones y mantenimiento en sistemas o aplicaciones existentes.',
            'Puedo desarrollar sistemas personalizados según tus necesidades, desde el diseño inicial hasta la implementación de funcionalidades avanzadas. Además, brindo soporte para corregir y optimizar aplicaciones existentes.',
        ],
        logros: [
            'Durante mi etapa en la preparatoria (CECyT 13), participé en eventos organizados por Oracle y JA Alumni, obteniendo algunos reconocimientos.',
            'Algunos de mis logros incluyen reconocimientos en eventos de Oracle y JA Alumni, donde pude destacar por mi creatividad y habilidades técnicas.',
        ],
        disponibilidad: [
            'Estoy regularmente disponible para consultas o proyectos. Aunque prefiero que me contacten por mensajería, como WhatsApp.',
            'Mi disponibilidad es flexible y prefiero el contacto inicial por medios como WhatsApp para coordinar cualquier detalle.',
        ],
        proyectos: [
            'Actualmente cuento con dos principales proyectos, los cuales cuentan con una amplia variedad de funciones, puedes consultarlos aquí en la sexxión de "proyectos"',
            'Mis proyectos actuales incluyen Hastán, una aplicación web para sistemas médicos, y una calculadora de matrices con funciones avanzadas como eliminación gaussiana paso a paso.',
        ],
        estudios: [
            'Estudio Ingeniería en Sistemas Computacionales en ESCOM del IPN.',
            'Soy técnico en informática y actualmente curso Ingeniería en Sistemas Computacionales en ESCOM-IPN.',
            'Mi enfoque académico está en desarrollo web, bases de datos, y aplicaciones móviles.',
            'Estoy especializándome en tecnologías backend, frontend, y soluciones innovadoras en sistemas computacionales en el IPN.',
        ],
        residencia: [
            'Vivo en la Ciudad de México, lo que me permite estar en contacto con un entorno dinámico para desarrollarme en programación y tecnología.',
            'Resido en la Ciudad de México, donde disfruto de estar cerca de grandes oportunidades en el ámbito tecnológico.',
        ],
        costo: [
            'Con gusto podemos revisar más a detalle el proyecto por mensaje directo en alguna de mis formas de contacto.',
            'Para definir algún costo podemos tener una conversación por mensaje directo para hablarlo mejor.',
        ],
        default: [
            'No estoy seguro de entenderte. ¿Podrías reformular la pregunta?',
            'Disculpa, no tengo información sobre eso, pero puedo intentar ayudarte con otra cosa.',
            'No entiendo completamente tu pregunta. ¿Podrías darme más detalles?',
        ],
    };

    function sendMessage(message, sender = 'user') {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'rounded-4', sender);
        messageDiv.textContent = message;
        chatDisplay.appendChild(messageDiv);
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }

function getResponse(input) {
    const lowerInput = input.toLowerCase();

    if (
        lowerInput.includes('hola') ||
        lowerInput.includes('hoola') ||
        lowerInput.includes('holaa') ||
        lowerInput.includes('buenas') ||
        lowerInput.includes('buenos') ||
        lowerInput.includes('gusto') ||
        lowerInput.includes('hey') ||
        lowerInput.includes('saludos') ||
        lowerInput.includes('qué tal') ||
        lowerInput.includes('cómo estás')
    ) {
        return responses.saludo[Math.floor(Math.random() * responses.saludo.length)];
    } else if (
        lowerInput.includes('contacto') ||
        lowerInput.includes('contactar') ||
        lowerInput.includes('correo') ||
        lowerInput.includes('email') ||
        lowerInput.includes('teléfono') ||
        lowerInput.includes('hablar') ||
        lowerInput.includes('trabajar') ||
        lowerInput.includes('contratar') ||
        lowerInput.includes('contratarte') ||
        lowerInput.includes('cómo te localizo') ||
        lowerInput.includes('dónde escribo') ||
        lowerInput.includes('reunión') ||
        lowerInput.includes('reunirme') ||
        lowerInput.includes('reunion') ||
        lowerInput.includes('reunirnos') ||
        lowerInput.includes('mensaje')
    ) {
        return responses.contacto[Math.floor(Math.random() * responses.contacto.length)];
    } else if (
        lowerInput.includes('habilidades') ||
        lowerInput.includes('qué sabes hacer') ||
        lowerInput.includes('tecnologías') ||
        lowerInput.includes('herramientas') ||
        lowerInput.includes('programas') ||
        lowerInput.includes('frameworks') ||
        lowerInput.includes('lenguajes') ||
        lowerInput.includes('programación') ||
        lowerInput.includes('bases de datos') ||
        lowerInput.includes('microsoft') ||
        lowerInput.includes('bases') ||
        lowerInput.includes('sql') ||
        lowerInput.includes('ia') ||
        lowerInput.includes('.net') ||
        lowerInput.includes('aplicaciones') ||
        lowerInput.includes('sistemas') ||
        lowerInput.includes('tecnicas') ||
        lowerInput.includes('crear') ||
        lowerInput.includes('reparar') ||
        lowerInput.includes('arreglar') ||
        lowerInput.includes('implementar') ||
        lowerInput.includes('competencias') ||
        lowerInput.includes('qué dominas') ||
        lowerInput.includes('experto en')
    ) {
        return responses.habilidades[Math.floor(Math.random() * responses.habilidades.length)];
    } else if (
        lowerInput.includes('equipo') ||
        lowerInput.includes('trabajar en equipo') ||
        lowerInput.includes('liderazgo') ||
        lowerInput.includes('colaborar') ||
        lowerInput.includes('trabajo grupal') ||
        lowerInput.includes('comunicarte') ||
        lowerInput.includes('cooperación') ||
        lowerInput.includes('colegas')
    ) {
        return responses.trabajo_en_equipo[Math.floor(Math.random() * responses.trabajo_en_equipo.length)];
    } else if (
        lowerInput.includes('meta') ||
        lowerInput.includes('futuro') ||
        lowerInput.includes('objetivo') ||
        lowerInput.includes('planes') ||
        lowerInput.includes('aspiraciones') ||
        lowerInput.includes('proyección') ||
        lowerInput.includes('dónde te ves') ||
        lowerInput.includes('a dónde quieres llegar')
    ) {
        return responses.metas[Math.floor(Math.random() * responses.metas.length)];
    } else if (
        lowerInput.includes('servicio') ||
        lowerInput.includes('ofreces') ||
        lowerInput.includes('puedes hacer') ||
        lowerInput.includes('ofertas') ||
        lowerInput.includes('qué haces') ||
        lowerInput.includes('qué servicios') ||
        lowerInput.includes('soluciones') ||
        lowerInput.includes('aportaciones')
    ) {
        return responses.servicios[Math.floor(Math.random() * responses.servicios.length)];
    } else if (
        lowerInput.includes('logro') ||
        lowerInput.includes('reconocimiento') ||
        lowerInput.includes('premio') ||
        lowerInput.includes('participación') ||
        lowerInput.includes('evento') ||
        lowerInput.includes('éxito') ||
        lowerInput.includes('certificación') ||
        lowerInput.includes('distinción')
    ) {
        return responses.logros[Math.floor(Math.random() * responses.logros.length)];
    } else if (
        lowerInput.includes('disponibilidad') ||
        lowerInput.includes('horario') ||
        lowerInput.includes('cuándo') ||
        lowerInput.includes('tiempo') ||
        lowerInput.includes('horas') ||
        lowerInput.includes('marcar') ||
        lowerInput.includes('llamar') ||
        lowerInput.includes('días libres') ||
        lowerInput.includes('cuánto tiempo tienes') ||
        lowerInput.includes('puedes responder')
    ) {
        return responses.disponibilidad[Math.floor(Math.random() * responses.disponibilidad.length)];
    } else if (
        lowerInput.includes('proyecto') ||
        lowerInput.includes('trabajo') ||
        lowerInput.includes('qué haces') ||
        lowerInput.includes('actualmente') ||
        lowerInput.includes('desarrollando') ||
        lowerInput.includes('en qué trabajas') ||
        lowerInput.includes('proyectos actuales') ||
        lowerInput.includes('portafolio')
    ) {
        return responses.proyectos[Math.floor(Math.random() * responses.proyectos.length)];
    } else if (
        lowerInput.includes('estudio') ||
        lowerInput.includes('dónde estudias') ||
        lowerInput.includes('qué estudias') ||
        lowerInput.includes('universidad') ||
        lowerInput.includes('escuela') ||
        lowerInput.includes('educación') ||
        lowerInput.includes('carrera') ||
        lowerInput.includes('escom') ||
        lowerInput.includes('ipn') ||
        lowerInput.includes('formación') ||
        lowerInput.includes('qué estás aprendiendo') ||
        lowerInput.includes('ingeniería en sistemas') ||
        lowerInput.includes('informática') ||
        lowerInput.includes('estudiaste') ||
        lowerInput.includes('estudias') ||
        lowerInput.includes('estudiante')
    ) {
        return responses.estudios[Math.floor(Math.random() * responses.estudios.length)];
    } else if (
        lowerInput.includes('ciudad') ||
        lowerInput.includes('dónde vives') ||
        lowerInput.includes('lugar') ||
        lowerInput.includes('vives') ||
        lowerInput.includes('ciudad') ||
        lowerInput.includes('país') ||
        lowerInput.includes('dónde') ||
        lowerInput.includes('dónde recides') ||
        lowerInput.includes('ubicado') ||
        lowerInput.includes('te ubicas') ||
        lowerInput.includes('ubicación') ||
        lowerInput.includes('recides') ||
        lowerInput.includes('te encuentras') ||
        lowerInput.includes('podemos encontrar') ||
        lowerInput.includes('buscarte') ||
        lowerInput.includes('encontrarte')
    ) {
        return responses.residencia[Math.floor(Math.random() * responses.residencia.length)];
    } else if (
        lowerInput.includes('cuánto') ||
        lowerInput.includes('cuanto') ||
        lowerInput.includes('me cobras') ||
        lowerInput.includes('cuesta') ||
        lowerInput.includes('cobrarías') ||
        lowerInput.includes('cobrarias') ||
        lowerInput.includes('precio') ||
        lowerInput.includes('precios') ||
        lowerInput.includes('costos') ||
        lowerInput.includes('costo') ||
        lowerInput.includes('dinero') ||
        lowerInput.includes('pago') ||
        lowerInput.includes('pagos') ||
        lowerInput.includes('pesos') ||
        lowerInput.includes('peso') ||
        lowerInput.includes('dólares')
    ) {
        return responses.costo[Math.floor(Math.random() * responses.costo.length)];
    }

    return responses.default[Math.floor(Math.random() * responses.default.length)];
}
    chatSendButton.addEventListener('click', () => {
        const userInput = chatInputField.value.trim();
        if (userInput) {
            sendMessage(userInput, 'user');
            chatInputField.value = '';
            setTimeout(() => {
                const botResponse = getResponse(userInput);
                sendMessage(botResponse, 'bot');
            }, 500);
        }
    });
    chatInputField.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            chatSendButton.click();
        }
    });
});