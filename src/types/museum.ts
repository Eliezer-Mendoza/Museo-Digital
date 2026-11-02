export interface Cacicazgo {
  id: string;
  nombre: string;
  etnia: string;
  familiaLinguistica: string;
  regionHistorica: string;
  ciudadesPrincipales: string[];
  descripcionCorta: string;
  descripcionCompleta: string;
  organizacionPolitica: string;
  economiaYRecursos: string[];
  legadoCultural: string;
  simbolo: string;
  imagenUrl: string;
}

export interface Cacique {
  id: string;
  nombre: string;
  nombreNativo?: string;
  titulo: string;
  pueblo: string;
  periodo: string;
  imagenUrl: string;
  fallbackIcon: 'warrior' | 'sage' | 'council' | 'pottery';
  resumen: string;
  historiaCompleta: string;
  hazañaHistorica: string;
  fraseCelebre?: string;
  rasgosLiderazgo: string[];
  region: string;
}

export interface Deidad {
  id: string;
  nombre: string;
  dominio: string;
  descripcion: string;
  simbologia: string;
  imagenUrl?: string;
}

export interface CeramicaPieza {
  id: string;
  nombre: string;
  estilo: string;
  periodoAproximado: string;
  material: string;
  descripcion: string;
  motivosDecorativos: string[];
  usoCeremonial: string;
  imagenUrl: string;
}

export interface PilarMonexico {
  id: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  significadoDemocrático: string;
  detallePractico: string;
  icono: string;
  imagenUrl: string;
}

export interface QuizQuestion {
  id: number;
  pregunta: string;
  contextoHistorico: string;
  opciones: string[];
  respuestaCorrecta: number; // 0-indexed
  explicacionDidactica: string;
  fuenteHistorica: string;
}

export interface TruequeItem {
  id: string;
  nombre: string;
  costoCacaoAlmendras: number;
  categoria: 'alimento' | 'bien_lujo' | 'animal' | 'textil';
  descripcion: string;
  fuenteCronista: string;
  imagenUrl?: string;
}
