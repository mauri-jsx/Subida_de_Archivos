# Tienda de Productos - Subida de Archivos

Este proyecto es una práctica que implementa un servidor básico utilizando **Express.js** para la creación de productos con imágenes asociadas. Las imágenes se gestionan utilizando **Multer** para la carga y **Cloudinary** para el almacenamiento en la nube.

## Características

- Subida de imágenes en formatos **JPG** y **PNG**.
- Transformación de imágenes a **webp** y redimensionado a 500x500 píxeles.
- Almacenamiento temporal de productos en un array en memoria.
- Gestión de imágenes en **Cloudinary**.

## Requisitos

- **Node.js** (v14 o superior)
- Una cuenta en **Cloudinary**
- Configuración de las variables de entorno para las credenciales de Cloudinary.

## Instalación

1. **Clona** el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tienda-productos.git
   cd tienda-productos
   npm install
   ```
