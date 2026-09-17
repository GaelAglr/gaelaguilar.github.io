
/* =========================================================
   SCROLL SUAVE EN ENLACES INTERNOS
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        const href = this.getAttribute('href');

        // Ignorar enlaces vacíos o solamente "#"
        if (!href || href === '#') {
            return;
        }

        const target = document.querySelector(href);

        // Si la sección no existe en esta página, no hacemos nada
        if (!target) {
            return;
        }

        e.preventDefault();

        const offset = 80;

        const elementPosition =
            target.getBoundingClientRect().top;

        const offsetPosition =
            elementPosition +
            window.scrollY -
            offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });

    });

});



/* =========================================================
   EFECTO DEL HERO DEL INDEX
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const card1 =
        document.querySelector("#card-1");

    const btn1 =
        document.querySelector("#btn-1");

    const btn2 =
        document.querySelector("#btn-2");


    // Este efecto solamente existe en páginas con #card-1
    if (!card1) {
        return;
    }


    window.addEventListener("scroll", () => {

        const scrollY =
            window.scrollY;

        const vh =
            window.innerHeight;


        /* Card principal */

        const fadeEndCard =
            vh;

        let opacityCard =
            1 - (scrollY / fadeEndCard);

        if (opacityCard < 0) {
            opacityCard = 0;
        }

        if (opacityCard > 1) {
            opacityCard = 1;
        }


        /* Botones */

        const fadeStartBtn =
            vh * 0.2;

        const fadeEndBtn =
            vh;

        let opacityBtn =
            1;


        if (scrollY >= fadeStartBtn) {

            opacityBtn =
                1 -
                (
                    (scrollY - fadeStartBtn) /
                    (fadeEndBtn - fadeStartBtn)
                );

        }


        if (opacityBtn < 0) {
            opacityBtn = 0;
        }

        if (opacityBtn > 1) {
            opacityBtn = 1;
        }


        /* Aplicar efectos */

        card1.style.opacity =
            opacityCard;

        card1.style.transform =
            `translateY(${scrollY * 0.08}px)`;


        if (btn1) {

            btn1.style.opacity =
                opacityBtn;

            btn1.style.transform =
                `translateY(${scrollY * -0.15}px)`;

        }


        if (btn2) {

            btn2.style.opacity =
                opacityBtn;

            btn2.style.transform =
                `translateY(${scrollY * -0.15}px)`;

        }

    });

});



/* =========================================================
   NAVEGACIÓN ACTIVA
   ========================================================= */

const navLinks =
    document.querySelectorAll('.navbar ul li a');


function actualizarEnlaceActivo() {

    let currentSection = '';


    document.querySelectorAll('section[id]')
        .forEach(section => {

            const sectionTop =
                section.offsetTop - 100;


            if (window.scrollY >= sectionTop) {

                currentSection =
                    section.getAttribute('id');

            }

        });


    navLinks.forEach(link => {

        link.classList.remove('activo');

        const href =
            link.getAttribute('href');


        if (
            currentSection &&
            href === `#${currentSection}`
        ) {

            link.classList.add('activo');

        }

    });

}


if (navLinks.length > 0) {

    window.addEventListener(
        'scroll',
        actualizarEnlaceActivo
    );

    window.addEventListener(
        'load',
        actualizarEnlaceActivo
    );

}



/* =========================================================
   MENÚ RESPONSIVO
   ========================================================= */

const toggle =
    document.querySelector('.menu-toggle');

const menu =
    document.querySelector('.menu');


if (toggle && menu) {

    /* Abrir / cerrar menú */

    toggle.addEventListener('click', () => {

        toggle.classList.toggle('active');

        menu.classList.toggle('active');

    });


    /* Cerrar menú al pulsar un enlace */

    document.querySelectorAll('.menu a')
        .forEach(link => {

            link.addEventListener('click', () => {

                menu.classList.remove('active');

                toggle.classList.remove('active');

            });

        });

}



/* =========================================================
   CHATBOT
   ========================================================= */

document.addEventListener(
    'DOMContentLoaded',
    () => {

        const chatDisplay =
            document.getElementById('chat-display');

        const chatInputField =
            document.getElementById('chat-input-field');

        const chatSendButton =
            document.getElementById('chat-send-button');


        /*
        El chatbot solamente existe en algunas páginas.
        Si no está presente, simplemente detenemos esta sección.
        */

        if (
            !chatDisplay ||
            !chatInputField ||
            !chatSendButton
        ) {
            return;
        }



        /* -------------------------
           RESPUESTAS
           ------------------------- */

        const responses = {

            saludo: [

                '¡Hola! ¿En qué puedo ayudarte?',

                '¡Hola! ¿Cómo estás? ¿Qué necesitas saber?',

                '¡Hola! ¿En qué puedo asistirte hoy?'

            ],


            contacto: [

                'Mis datos de contacto son:\nCorreo: gaelnn10@gmail.com\nTeléfono: 55 6528 5694.',

                'Puedes contactarme por correo en gaelnn10@gmail.com o al número 55 6528 5694.',

                'Si necesitas contactarme, mi correo es gaelnn10@gmail.com y mi teléfono es 55 6528 5694.'

            ],


            habilidades: [

                'Tengo un dominio avanzado de C# en aplicaciones de escritorio y web bajo arquitectura MVC. También manejo JavaScript, algo de Python, ANSI C y Java. Mi especialidad es el desarrollo full stack, trabajando tanto en frontend como backend. Además, tengo un buen manejo de bases de datos utilizando SQL Server.',

                'Mis habilidades técnicas incluyen C# como lenguaje principal, JavaScript, Python, ANSI C y algo de Java. También manejo bases de datos con SQL Server y tengo experiencia desarrollando sistemas completos desde cero.'

            ],


            trabajo_en_equipo: [

                'Disfruto trabajar en equipo y tengo buen liderazgo, sin que esto afecte mi capacidad para colaborar en equipos diversos. Soy respetuoso, empático y me comunico eficazmente para lograr los objetivos.',

                'Trabajo bien en equipo, con habilidades de comunicación, empatía y respeto. También considero que mi liderazgo favorece la colaboración entre los integrantes.'

            ],


            metas: [

                'Entre mis objetivos está mejorar continuamente mis habilidades actuales, explorar más sobre Inteligencia Artificial y adquirir experiencia en áreas como el desarrollo de aplicaciones móviles.',

                'Mi meta principal es aprender nuevas tecnologías y optimizar mi capacidad para desarrollar sistemas complejos. También me interesa profundizar en Inteligencia Artificial y aplicaciones móviles.'

            ],


            servicios: [

                'Desarrollo sitios web, sistemas personalizados y herramientas digitales adaptadas a las necesidades de cada proyecto.',

                'Puedo desarrollar soluciones web desde cero, incluyendo interfaz, funcionamiento, bases de datos y funcionalidades específicas según las necesidades del proyecto.'

            ],


            logros: [

                'Durante mi etapa en CECyT 13 participé en eventos organizados por Oracle y JA Alumni, obteniendo distintos reconocimientos.',

                'Entre mis experiencias se encuentran participaciones en eventos de Oracle y JA Alumni, donde pude desarrollar y demostrar habilidades técnicas y creativas.'

            ],


            disponibilidad: [

                'Estoy regularmente disponible para consultas o proyectos. Para un primer contacto prefiero medios como WhatsApp.',

                'Mi disponibilidad es flexible y prefiero el contacto inicial por mensajería para poder coordinar mejor los detalles.'

            ],


            proyectos: [

                'Actualmente puedes consultar mis principales trabajos en la sección de proyectos de este portafolio.',

                'Entre mis proyectos se encuentran Hastán, un sistema web para la gestión de servicios médicos, y una calculadora de matrices desarrollada en C#.'

            ],


            estudios: [

                'Estudio Ingeniería en Sistemas Computacionales en ESCOM del IPN.',

                'Soy técnico en informática y actualmente curso Ingeniería en Sistemas Computacionales en ESCOM-IPN.',

                'Mi formación está orientada al desarrollo de software, desarrollo web, bases de datos y sistemas computacionales.'

            ],


            residencia: [

                'Me encuentro en la Ciudad de México.',

                'Actualmente resido en la Ciudad de México.'

            ],


            costo: [

                'Podemos revisar los requerimientos del proyecto por mensaje directo para poder definir mejor su alcance y costo.',

                'El costo depende de las características del proyecto. Podemos hablar por mensaje directo para revisar qué necesitas.'

            ],


            default: [

                'No estoy seguro de entenderte. ¿Podrías reformular la pregunta?',

                'No tengo información suficiente sobre eso, pero puedes preguntarme sobre mis proyectos, habilidades, estudios o servicios.',

                'No entiendo completamente tu pregunta. ¿Podrías darme más detalles?'

            ]

        };



        /* -------------------------
           MOSTRAR MENSAJE
           ------------------------- */

        function sendMessage(
            message,
            sender = 'user'
        ) {

            const messageDiv =
                document.createElement('div');


            messageDiv.classList.add(
                'message',
                'rounded-4',
                sender
            );


            messageDiv.textContent =
                message;


            chatDisplay.appendChild(
                messageDiv
            );


            chatDisplay.scrollTop =
                chatDisplay.scrollHeight;

        }



        /* -------------------------
           OBTENER RESPUESTA
           ------------------------- */

        function getResponse(input) {

            const lowerInput =
                input.toLowerCase();



            /* Saludo */

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

                return responses.saludo[
                    Math.floor(
                        Math.random() *
                        responses.saludo.length
                    )
                ];

            }



            /* Contacto */

            else if (

                lowerInput.includes('contacto') ||
                lowerInput.includes('contactar') ||
                lowerInput.includes('correo') ||
                lowerInput.includes('email') ||
                lowerInput.includes('teléfono') ||
                lowerInput.includes('hablar') ||
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

                return responses.contacto[
                    Math.floor(
                        Math.random() *
                        responses.contacto.length
                    )
                ];

            }



            /* Habilidades */

            else if (

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
                lowerInput.includes('sql') ||
                lowerInput.includes('ia') ||
                lowerInput.includes('.net') ||
                lowerInput.includes('aplicaciones') ||
                lowerInput.includes('sistemas') ||
                lowerInput.includes('crear') ||
                lowerInput.includes('reparar') ||
                lowerInput.includes('arreglar') ||
                lowerInput.includes('implementar') ||
                lowerInput.includes('competencias') ||
                lowerInput.includes('qué dominas') ||
                lowerInput.includes('experto en')

            ) {

                return responses.habilidades[
                    Math.floor(
                        Math.random() *
                        responses.habilidades.length
                    )
                ];

            }



            /* Trabajo en equipo */

            else if (

                lowerInput.includes('equipo') ||
                lowerInput.includes('trabajar en equipo') ||
                lowerInput.includes('liderazgo') ||
                lowerInput.includes('colaborar') ||
                lowerInput.includes('trabajo grupal') ||
                lowerInput.includes('comunicarte') ||
                lowerInput.includes('cooperación') ||
                lowerInput.includes('colegas')

            ) {

                return responses.trabajo_en_equipo[
                    Math.floor(
                        Math.random() *
                        responses.trabajo_en_equipo.length
                    )
                ];

            }



            /* Metas */

            else if (

                lowerInput.includes('meta') ||
                lowerInput.includes('futuro') ||
                lowerInput.includes('objetivo') ||
                lowerInput.includes('planes') ||
                lowerInput.includes('aspiraciones') ||
                lowerInput.includes('proyección') ||
                lowerInput.includes('dónde te ves') ||
                lowerInput.includes('a dónde quieres llegar')

            ) {

                return responses.metas[
                    Math.floor(
                        Math.random() *
                        responses.metas.length
                    )
                ];

            }



            /* Servicios */

            else if (

                lowerInput.includes('servicio') ||
                lowerInput.includes('ofreces') ||
                lowerInput.includes('puedes hacer') ||
                lowerInput.includes('ofertas') ||
                lowerInput.includes('qué servicios') ||
                lowerInput.includes('soluciones') ||
                lowerInput.includes('aportaciones')

            ) {

                return responses.servicios[
                    Math.floor(
                        Math.random() *
                        responses.servicios.length
                    )
                ];

            }



            /* Logros */

            else if (

                lowerInput.includes('logro') ||
                lowerInput.includes('reconocimiento') ||
                lowerInput.includes('premio') ||
                lowerInput.includes('participación') ||
                lowerInput.includes('evento') ||
                lowerInput.includes('éxito') ||
                lowerInput.includes('certificación') ||
                lowerInput.includes('distinción')

            ) {

                return responses.logros[
                    Math.floor(
                        Math.random() *
                        responses.logros.length
                    )
                ];

            }



            /* Disponibilidad */

            else if (

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

                return responses.disponibilidad[
                    Math.floor(
                        Math.random() *
                        responses.disponibilidad.length
                    )
                ];

            }



            /* Proyectos */

            else if (

                lowerInput.includes('proyecto') ||
                lowerInput.includes('portafolio') ||
                lowerInput.includes('desarrollando') ||
                lowerInput.includes('en qué trabajas') ||
                lowerInput.includes('proyectos actuales')

            ) {

                return responses.proyectos[
                    Math.floor(
                        Math.random() *
                        responses.proyectos.length
                    )
                ];

            }



            /* Estudios */

            else if (

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

                return responses.estudios[
                    Math.floor(
                        Math.random() *
                        responses.estudios.length
                    )
                ];

            }



            /* Residencia */

            else if (

                lowerInput.includes('ciudad') ||
                lowerInput.includes('dónde vives') ||
                lowerInput.includes('lugar') ||
                lowerInput.includes('vives') ||
                lowerInput.includes('país') ||
                lowerInput.includes('dónde resides') ||
                lowerInput.includes('ubicado') ||
                lowerInput.includes('te ubicas') ||
                lowerInput.includes('ubicación') ||
                lowerInput.includes('resides') ||
                lowerInput.includes('te encuentras')

            ) {

                return responses.residencia[
                    Math.floor(
                        Math.random() *
                        responses.residencia.length
                    )
                ];

            }



            /* Costo */

            else if (

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
                lowerInput.includes('dólares')

            ) {

                return responses.costo[
                    Math.floor(
                        Math.random() *
                        responses.costo.length
                    )
                ];

            }



            return responses.default[
                Math.floor(
                    Math.random() *
                    responses.default.length
                )
            ];

        }



        /* -------------------------
           ENVIAR CON BOTÓN
           ------------------------- */

        chatSendButton.addEventListener(
            'click',
            () => {

                const userInput =
                    chatInputField.value.trim();


                if (!userInput) {
                    return;
                }


                sendMessage(
                    userInput,
                    'user'
                );


                chatInputField.value =
                    '';


                setTimeout(() => {

                    const botResponse =
                        getResponse(userInput);


                    sendMessage(
                        botResponse,
                        'bot'
                    );

                }, 500);

            }
        );



        /* -------------------------
           ENVIAR CON ENTER
           ------------------------- */

        chatInputField.addEventListener(
            'keydown',
            (e) => {

                if (e.key === 'Enter') {

                    e.preventDefault();

                    chatSendButton.click();

                }

            }
        );

    }
);