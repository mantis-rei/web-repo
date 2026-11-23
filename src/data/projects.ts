export type Project = {
  slug: string; title: string; category: string; description: string;
  tags: string[]; theme: string; label: string;
  github?: string; live?: string; intro: string;
  upstream?: { name: string; url: string };
  preview?: { src: string; alt: string; width: number; height: number; cropTop?: number };
  challenge: string; approach: string; features: string[];
  source: string;
};

export const projects: Project[] = [
  {
    slug: 'easy-fine-tuner', title: 'Easy Fine-Tuner', category: 'AI ENGINEERING',
    description: 'From raw text to a fine-tuned model. A simpler path to making open-source AI your own.',
    tags: ['Python', 'Hugging Face', 'LoRA'], theme: 'tuner', label: 'Model training workflow',
    github: 'https://github.com/mantis-rei/Easy-fineTuner',
    intro: 'An end-to-end fine-tuning toolkit that turns plain-text knowledge into training datasets and deployable model outputs on a GPU-powered Linux VPS.',
    challenge: 'Adapting an open-source language model involves more than running a training command. Data preparation, GPU constraints, and model export all add friction to the workflow.',
    approach: 'I brought dataset conversion, batch processing, hardware-aware training settings, and model export into one practical Python toolkit.',
    features: ['Convert Q&A, headings, numbered text, and paragraphs into training data.', 'Batch-process text files for a repeatable dataset preparation workflow.', 'Adjust training settings to the available GPU memory.', 'Save both lightweight LoRA adapters and a merged model.'],
    source: 'Project scope is based on the public repository README and the supplied LinkedIn project listing.',
  },
  {
    slug: 'pezaas', title: 'Pezaas', category: 'WEB DEVELOPMENT',
    description: 'A locally focused social media growth platform, built for the Rwandan market.',
    tags: ['Astro', 'JavaScript', 'Web design'], theme: 'pezaas', label: 'Pezaas website preview',
    live: 'https://pezaas.vercel.app/',
    preview: { src: 'images/pezaas-preview.webp', alt: 'Pezaas homepage with social media services, Rwandan franc pricing, and order tracking', width: 1800, height: 912 },
    intro: 'A social media growth panel developed under WIMAZA Technologies, with a web experience focused on a Rwandan audience.',
    challenge: 'A local digital product needs a clear presentation of its offering and an interface that feels relevant to its audience.',
    approach: 'The project combines an Astro-based web experience with a focused product identity and social media service presentation.',
    features: ['A social media growth service panel.', 'A product experience tailored to the Rwandan market.', 'Astro and JavaScript implementation.', 'Part of the WIMAZA Technologies project portfolio.'],
    source: 'Project scope and technology are drawn from the supplied LinkedIn listing. The website screenshot and live project link were provided by Blaise.',
  },
  {
    slug: 'outreachhub', title: 'OutreachHub', category: 'AUTOMATION',
    description: 'Bringing lead generation and customer outreach into one focused workspace.',
    tags: ['React', 'JavaScript', 'Lead generation'], theme: 'outreach', label: 'OutreachHub website preview',
    live: 'https://outreachhub-dc64f.web.app/',
    preview: { src: 'images/outreachhub-preview.webp', alt: 'OutreachHub workspace sign-in page for lead generation and customer outreach', width: 1800, height: 1013, cropTop: 10.7 },
    intro: 'A custom-built lead generation and customer outreach application that brings a business workflow into a dedicated web interface.',
    challenge: 'Prospecting and customer outreach can become fragmented when the workflow is spread across disconnected tools.',
    approach: 'I built a focused React application around lead generation and customer outreach, connecting the workflow through a consistent interface.',
    features: ['A dedicated lead generation workspace.', 'Customer outreach functionality.', 'A custom React and JavaScript interface.', 'A workflow-oriented approach to business software.'],
    source: 'Project scope and technology are drawn from the supplied LinkedIn listing. The website screenshot and live project link were provided by Blaise.',
  },
  {
    slug: 'veo-stream', title: 'VEO Stream', category: 'GENERATIVE AI',
    description: 'Turning creative ideas into cinematic, AI-generated video through a dedicated interface.',
    tags: ['Python', 'APIs', 'Video generation'], theme: 'veo', label: 'Video generation concept',
    intro: 'An API-driven video generation project exploring cinematic synthesis through a dedicated application interface.',
    challenge: 'Creative AI tools need to translate technical model capabilities into a workflow that helps people express an idea and work with the result.',
    approach: 'The project connects a Python and API-based implementation to a video generation experience for short cinematic outputs.',
    features: ['Cinematic AI video synthesis.', 'Short-form, eight-second video generation.', 'An application interface for the generation workflow.', 'Python and API integration.'],
    source: 'Project scope is drawn from the supplied LinkedIn listing. The visual is an abstract illustration of the video generation workflow.',
  },
  {
    slug: 'kora-architect', title: 'Kora Architect', category: 'DESIGN TECHNOLOGY',
    description: 'From hand-drawn floorplans to editable parametric 3D models, with Rwanda-style roofs.',
    tags: ['Floorplan sketches', 'Parametric 3D', 'Roof design'], theme: 'kora', label: 'Sketch-to-model illustration',
    github: 'https://github.com/mantis-rei/Kora-Architect',
    intro: 'Kora Architect explores an end-to-end system for converting hand-drawn floorplan sketches into fully editable parametric 3D models with Rwanda-style roofs.',
    challenge: 'Moving from a floorplan sketch to an editable building model requires a bridge between a quick visual idea and a structured architectural representation.',
    approach: 'The project centers on a sketch-to-model workflow, pairing parametric editing with roof forms relevant to Rwandan architecture.',
    features: ['Hand-drawn floorplan sketches as the starting point.', 'Conversion into parametric 3D building models.', 'Editable model outputs.', 'Rwanda-style roof design.'],
    source: 'Project scope is based on the public GitHub repository description. The visual illustrates the sketch-to-model concept and is not an application screenshot.',
  },
  {
    slug: 'maza-tts', title: 'MAZA TTS', category: 'AI AUDIO',
    description: 'A CPU-friendly text-to-speech exploration, based on Kyutai’s Pocket TTS.',
    tags: ['Python', 'PyTorch', 'Text to speech'], theme: 'maza', label: 'Text-to-speech illustration',
    github: 'https://github.com/mantis-rei/pocket-tts-by-Viper',
    upstream: { name: 'Kyutai · Pocket TTS', url: 'https://github.com/kyutai-labs/pocket-tts' },
    intro: 'MAZA TTS is my text-to-speech exploration based on an open-source fork of Kyutai’s Pocket TTS, a lightweight speech generation system designed to run on CPUs.',
    challenge: 'Making speech generation easier to run locally means reducing dependence on dedicated GPU hardware and hosted inference services.',
    approach: 'The linked repository provides a Pocket TTS foundation with Python and command-line interfaces, streamed audio generation, and a local HTTP interface.',
    features: ['CPU-based text-to-speech generation.', 'Streaming audio output.', 'Python library and command-line interfaces.', 'A local HTTP server and web interface.'],
    source: 'MAZA TTS is the name supplied by Blaise. The linked repository is a fork of Kyutai’s Pocket TTS; capabilities are drawn from its README. The visual is an illustration, not an application screenshot.',
  },
  {
    slug: 'study-craft-ai', title: 'Study Craft AI', category: 'AI FOR EDUCATION',
    description: 'Helping students approach complex topics through step-by-step learning.',
    tags: ['JavaScript', 'React', 'Vite'], theme: 'study', label: 'Learning journey concept',
    github: 'https://github.com/mantis-rei/Study-Craft-AI', live: 'https://study-craft-ai-seven.vercel.app',
    intro: 'An educational web application designed to help students work through complex topics one step at a time.',
    challenge: 'Complex subjects can be overwhelming when students are presented with too much information at once.',
    approach: 'The project explores a guided, step-by-step learning experience in a JavaScript web application built from a React and Vite foundation.',
    features: ['A focus on understanding complex topics.', 'A step-by-step learning approach.', 'A JavaScript, React, and Vite foundation.', 'A publicly available project and web application.'],
    source: 'Project scope is based on the public GitHub description and repository README. The visual is a learning-flow concept.',
  },
];
