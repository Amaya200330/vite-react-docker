# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Repositorio remoto (GitHub)

El proyecto fue versionado utilizando Git y publicado en GitHub.

### Pasos realizados
1. Instalación y configuración de Git en Windows 11
2. Inicialización de repositorio local
3. Creación de `.gitignore`
4. Commit inicial del proyecto
5. Creación de repositorio remoto en GitHub
6. Conexión del repositorio local con el remoto
7. Push del código a la rama principal (`main`)

### Estado actual
- ✅ Repositorio local y remoto sincronizados
- ✅ Proyecto documentado
- ✅ Base lista para ejecución con Docker

### Próximo paso
- Ejecutar el proyecto dentro de un contenedor Docker
- Mejorar el Dockerfile (build de producción)


---

## Uso de Docker

Este proyecto fue ejecutado por primera vez usando Docker Desktop en Windows 11.

### Docker en desarrollo
Se utilizó un contenedor basado en Node.js para ejecutar la aplicación en modo desarrollo.

Comandos utilizados:

```bash
docker build -t vite-react-dev .
docker run -p 5173:5173 vite-react-dev