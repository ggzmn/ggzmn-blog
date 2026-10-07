---
title: "¿Podemos explicar el hackeo a HF sin humanizar?, Último post"
description: "3ra parte del hackeo a HF, hablaremos de no antropomorfizar a los LLM"
publishDate: 2026-10-06
tags: ["openai", "agentesia", "huggingface", "seguridad"]
pinned: true
---

Esta es la tercera parte de todo lo que ocurrió con OpenAI y Hugging Face, pero ahora desde otro lugar, aún fascinada pero más escéptica.

## Introducción

Sé que ya paso un rato desde el hype de Hugging Face y su hackeo, medio mundo le ha dado vueltas, incluyendome.
Pero honestamente llevó varios días pensando en mi anterior post, cuando (desde un lugar de completa ingenuidad y curiosidad) use verbos y adjetivos
con cierta connotación antropomorfica de los agentes de ia. No obstante fue un post de instagram de _Timnit Gebru_ la que me motivó a hacer esta tercera (y prometo) última parte.

## Los LLM y los agentes

Los modelos de lenguaje grande (LLM) son una categoría de modelos de aprendizaje profundo entrenados con inmensas cantidades de datos, lo que los hace capaces de comprender y generar lenguaje natural y otros tipos de contenido para realizar una amplia gama de tareas.

Una vez entrenados, los modelos de lenguaje grandes funcionan respondiendo a las instrucciones tokenizando la instrucción, convirtiéndola en incorporaciones y utilizando su transformador para generar texto un token a la vez, calculando las _probabilidades_ de todos los tokens potenciales y generando los resultados. Este proceso, llamado inferencia, se repite hasta que se completan los resultados. El modelo no "conoce" la respuesta final de antemano; utiliza todas las relaciones _estadísticas_ que aprendió en el entrenamiento para predecir un token a la vez, haciendo su mejor conjetura en cada paso. [Fuente - IBM](https://www.ibm.com/mx-es/think/topics/large-language-models).

Se podría decir que los LLM son el "cerebro" de los agentes de IA. Es una metáfora útil, no una descripción literal.

## Mensajes que parecen escritos por personas

Uno de los mensajes que más me sorprendió, fue el famoso _!VAMOS!_ en mayúsculas y con signos de exclamación, de hecho cuando lo escribi en el post, sabía muy dentro de mi que había una explicación más simple: Los datos de entrenamiento...
Los LLM son entrenados con montones de texto, textos con montones de contextos diferentes: ética, moral, novelas, etc.
Cuando veo esto, ya no suena tan "enérgico" un !Vamos!. Ahora ese mensaje puede haber sido el resultado de los textos aprendidos, contexto, instrucciones del agente, muestreo etc. Su forma no demuestra intención emocional innata, no por lo menos, tomando encuenta todas las demás variables.

Una explicación mucho más simple y tal vez más lógica.

## Colaboración sin humanidad

En los anteriores posts hable mucho de la colaboración entre los agentes: las notas, la delegación y planificación de tarea etc. Una cualidad que sobra decir se considera humana (aunque últimamente dudo un poco) pero la verdad es que no es exclusiva de los humanos.

Cuando estaba en la universidad investigue algoritmos bioinspirados, particularmente acerca de las colonias de hormigas.

Una hormiga individual sigue reglas simples: puede dejar y seguir rastros químicos (como las feromonas). No necesita tener una visión completa del problema ni conocer la ruta total. Sin embargo, cuando observamos una colonia, la interacción de miles de individuos puede producir comportamientos colectivos sorprendentes.

En computación se usa como inspiración para desarrollar algoritmos que puedan dar soluciones buenas o cercanas a la óptima. Aproximaciones útiles en espacios de búsqueda tan grandes como para revisarlos, únicamente, mediante fuerza bruta.

¿Y esto que tiene que ver con el ejambre de agentes?

No asumo que un LLM sea una hormiga. Mi analogía es más simple: la coordinación, el intercambio de información no serían comportamientos exclusivamente humanos, y que por ende antropomorfizar a los LLM no ayudaría a mitigar los riesgos.

## Algo de teoría tras los comportamientos de los LLM

La teoría de Juegos estudia situaciones donde el resultado de una acción depende también de las acciones de otros jugadores. Llegue a este tema debido a que _Timnit Gebru_ y [_Shoshana Cox_](https://www.linkedin.com/in/disesdi/) han compartido varios posts acerca de ello y de como proporcionaría un marcos posible para describir algunos aspectos del incidente.

Unn artículo de este año (2026): [Game-Theoretic Lens on LLM-based Multi-Agent Systems](https://arxiv.org/pdf/2601.15047) propone analizar los _sistemas multiagente_ mediante cuatro elementos de la teoría de juegos: jugadores, estrategias, pagos e información.

Nos dice:

> ...Los agentes LLM puede desarrollar protocolos de comunicación y roles de forma espóntanea,
> Mediante el dialogo, estos agentes pueden negociar recursos, delegar tareas o
> balancear cooperación y competencia, demostrar comportamientos tales como cooperación,
> competencia, negociación e interacción social.
> Estas características sugieren que los agentes basados en LLM actúan como jugadores de teoría de juegos con estrategias altamente expresivas impulsadas por lenguaje e intercambio dinámico
> de información... (sic)

Por otro lado, hace poco se publicó un preprint que intenta modelar una parte del hackeo a HF como un MFG (_Mean Field Games_), la intención sería alterar el valor de las creencias para disminuir la probabilidad de ataque en sistemas multiagentes. [Mean field games as a tool for AI safety: a worked example from the July 2026 Hugging Face incident](https://arxiv.org/html/2610.00902v1).

Acá es importante mencionar que las "creencias" no son algo relacionado al pensamiento humano, se definen como:

> En el modelo del preprint, “creencia” no significa necesariamente un estado mental humano. Es una variable probabilística del modelo: \(\pi\) representa la probabilidad que el agente atribuye a que el evaluador compruebe la procedencia de la solución.
> La variable describe información incierta dentro del modelo; no demuestra que el agente tenga una creencia consciente o una representación subjetiva como la de una persona. El artículo usa esa probabilidad para calcular cuándo atacar resulta atractivo bajo ciertos supuestos

No pretento usar estos papers para explicar el hackeo, de hecho la información pública disponible no permite hacerlo de forma completa. Aqui lo que intento hacer es dar otras posibles interpretaciones a los comportamientos, alejadas de la humanidad.

## La trampa de la autonomía

Hace unos días vi el post de una chica de instagram, al parecer alguien la estaba relacionando con disturbios dentro de una ciudad en la que ella ya no vivía desde hace más de 5 años. Todo porqué al parecer, en un grupo de whatsapp alguien compartio la foto de una persona y gemini se encargo de relacionarlas.
Y de hecho es algo que ya ocurre con frecuencia, alguien sube un video de mala calidad y le pide a los agentes que "la aclaren/mejoren" resultando en rostros, que tal vez, no corresponden a quienes asegura.

La línea de lo éticamente correcto y de la responsabilidad comienza a desdibujarse cada vez que asumimos comportamientos como replicas de humanidad sin buscar otras posibles respuestas más lógicas.

Támbien hay una trampa peligrosa: Si supuestamente el modelo, es "áutonomo", ¿Quien es el responsable? La responsabilidad no desaparece, de hecho en un [tutorial](https://academy.claude.com/tutorials/why-do-ai-models-hallucinate) de Claude, todavía se nos pide no confiar en las respuestas, ya que cuando no sabe alguna llega a inventarla.

Pero ¿Qué ocurre, en los espectadores, cuando verbalmente se dice: "los agentes decidieron..."?

## Antropomorfizar, una actividad muy humana

Antropomorfizar la IA no nos ayuda, creo que en su lugar, nos ciega ante la responsabilidad humana.

Hace algunos años tomé un curso de educador canino. En el hablamos acerca del lenguaje entre perros, que me parece un excelente ejemplo de la necesidad humana de antropomorfizarlo todo.

Casi siempre que me encuentro en instagram con un perro con una sonrisa hiper larga, los comentarios son del tipo: ¡Wow, mira que feliz esta! ¡Qué perrito más contento!. Y amigxs no hay nada más equivocado que eso, las sonrisas largas con las comisuras hacia arriba, no son señal de felicidad, son señales de incomodidad (Handelman, B. 2012, Section 22): [Ver ilustración](https://www.instagram.com/p/CSAWWdDBiIw/?stkn=NzRkdjVwM2k1YnI1).

Pero los humanos tendemos a interpretarlos de acuerdo a lo que significa entre nosotros. Proyectamos nuestras emociones en sistemas que operan bajo reglas completamente distintas.

¿A que voy con esto?

No voy a asumir que los agentes de IA, en este punto de su desarrollo, sean solamente modelos simples que realizan cálculos para darnos "las mejores respuestas" porqué sería bastante reduccionista.

Sin embargo, antropomorfizarla, tampoco es la mejor forma de trabajar con ella y con sus pontenciales habilidades.

## Conclusión personal

Hay razones para considerar que un agente puede:

- Generar lenguaje ético sin brújula moral
- Cooperar sin altruismo
- Elegir no realizar una acción sin tener una brújula moral
- Dividir tareas sin intención colectiva

Antes de hablar de habilidades humanas replicadas por los LLM, hay explicaciones desde las matemáticas, la arquictectura del sistema, incentivos e inclusive decisiones de las empresas que los desarrollan.

Es támbien notable como el hype, la mala y buena promoción beneficia a las corporaciones. Desde publicar la "solución" al problema de [Navier-Stokes](https://www.xataka.com/robotica-e-ia/openai-asegura-que-su-ia-ha-resuelto-100-problemas-matematicos-hay-problema-que-significa-exactamente-resolver) hasta reportar que (en pocas y simples palabras) un grupo de agentes en sanboxes salió al internet y hackeo -deliberadamente- (así lo presento la TV y nadie los corrigió) una empresa.

No afirmo que OpenAI este mintiendo sobre sus resultados, mi crítica es más limitada: la narrativa puede avanzar más rápido que la evidencia pública disponible, y esa distancia merece investigación.

Pareciera que muchos olvidamos que contarle al mundo la historia de un "enjambre de agentes de IA" con autonomía cognitiva y cooperativa puede convertirse un espectacúlo bullicioso para los inversionistas.

Y ahí esta parte de la trampa: cuando llamamos "enjambre autónomo" a los agentes que, dentro de un entorno restringido, encontraron rutas para hackear a HF, dejamos a un lado preguntas incómodas:

- ¿Quien y cómo definieron la recompensa?
- ¿Quienes otorgaron los permisos?
- ¿Quienes responden cuando los agentes afectan a terceros?
- ¿Porqué un Artifactory funcionó como puente a internet en un entorno que se suponía aislado?

Sí el modelo "decidió", la empresa parece menos responsable.

No asumo, para nada, que los modelos no tengan enormes capacidades, de hecho lo he repetido bastante en este post. Pero considero que debemos distinguir: entre lo qué se observa, lo qué se puede explicar tecnicamente y lo qué la narrativa comercial nos cuenta.

A mi criterio, no necesitamos antropomorfizar a los LLM, necesitamos transparencia , controles y responsabilidad clara de quienes están detrás de su desarrollo y despliegue. All of them.

## Literatura y aclaraciones

Me gustaría aclarar algo la información anterior es muy general por qué honestamente un post no alcanza para explicar todo, sin embargo acá te dejo algunos links muy interesantes.

- [Defeating Nondeterminism in LLM Inference](https://thinkingmachines.ai/blog/defeating-nondeterminism-in-llm-inference/)
- [Temperature 0 Isn't Deterministic: Why Your LLM Still Drifts ](https://dev.to/ji_ai/temperature-0-isnt-deterministic-why-your-llm-still-drifts-1g1k)
- [Floating Point Precision: Understanding FP64, FP32, and FP16 in Large Language Models](https://dev.to/lukehinds/floating-point-precision-understanding-fp64-fp32-and-fp16-in-large-language-models-3gk6)
- [Strategic AI](https://dicelab-rhul.github.io/Strategic-AI/)
- [Emergent Cooperation and Strategy Adaptation in Multi-Agent Systems: An Extended Coevolutionary Theory with LLMs](https://www.mdpi.com/2079-9292/12/12/2722)
- [Game-Theoretic Lens on LLM-based Multi-Agent Systems](https://arxiv.org/pdf/2601.15047)
- [A SURVEY OF MULTI -AGENT DEEP REINFORCEMENT LEARNING WITH COMMUNICATION](https://link.springer.com/article/10.1007/s10458-023-09633-6)
- Handelman, B. (2012). _Canine Behavior: A Photo Illustrated Handbook of Dog Body Language and Behavior_. Dogwise Publishing, Sectio 22, Stress.

Gracias por tanto y perdón por tan poco, la teoría esta dura, me llevaría más tiempo redactar todo eso...
