/* ==========================================================================
   PRECIOS Y CONFIGURACIÓN
   --------------------------------------------------------------------------
   Este es el ÚNICO archivo que hay que tocar cuando cambian los precios.
   Valores = cuota mensual sin descuento ni IVA (tomados del Excel).
   ========================================================================== */

window.CONFIG = {
  vigencia: "Pyme hasta 10 cápitas",

  // Valores por defecto del formulario
  descuento: 20,          // % descuento inicial
  iva: 10.5,              // % IVA automático cuando NO hay aporte
  ivaAdicional: 10.5,     // % que se suma si "no registra impuestos activos"
  aporteReciboPct: 3,     // % aporte que figura en el recibo (fijo)
  aporteEmpleadorPct: 4.5,// % aporte del empleador (fijo)
  maxPlanes: 3,           // planes que entran en la imagen

  // Planes tildados al abrir el cotizador
  planesPorDefecto: ["Plan 4021_22", "Plan 4500_23", "Plan 6500_21"],

  observaciones:
`Descuento del 20% durante los primeros doce meses contados a partir de la fecha de contratación`
};

/* grupo: "sin" = sin copagos | "con" = con copagos | "otros"
   copagos: true / false / null (null = se muestra "Consultar")            */
window.PLANES = {
  "Plan 2500_24":       { grupo: "sin",     copagos: false, "18_25":  125006, "26_35":  160559, "36_54":  211299, "55_59":  358211, "60_plus":  618369, child1:  108871, child2plus:   93910 },
  "Plan 4021_22":       { grupo: "sin",     copagos: false, "18_25":  125551, "26_35":  172618, "36_54":  213299, "55_59":  368072, "60_plus":  620283, child1:  109155, child2plus:   94281 },
  "Plan 4500_23":       { grupo: "sin",     copagos: false, "18_25":  141231, "26_35":  172968, "36_54":  240346, "55_59":  414289, "60_plus":  698414, child1:  122667, child2plus:  106344 },
  "Plan 6500_21":       { grupo: "sin",     copagos: false, "18_25":  199353, "26_35":  285035, "36_54":  333863, "55_59":  559475, "60_plus":  833062, child1:  173899, child2plus:  151259 },
  "Plan 8500_21":       { grupo: "sin",     copagos: false, "18_25":  342777, "26_35":  456593, "36_54":  600952, "55_59":  837615, "60_plus": 1141444, child1:  300349, child2plus:  262129 },

  "Plan 2500_20":       { grupo: "con",     copagos: true , "18_25":   89643, "26_35":  122739, "36_54":  160424, "55_59":  303220, "60_plus":  442384, child1:   85215, child2plus:   76692 },
  "Plan 4021_20":       { grupo: "con",     copagos: true , "18_25":   91325, "26_35":  123951, "36_54":  160375, "55_59":  305716, "60_plus":  450596, child1:   84806, child2plus:   79153 },
  "Plan 4500_20":       { grupo: "con",     copagos: true , "18_25":  104815, "26_35":  140311, "36_54":  185161, "55_59":  354709, "60_plus":  520285, child1:   99150, child2plus:   92872 },
  "Plan 6500_20":       { grupo: "con",     copagos: true , "18_25":  127744, "26_35":  179573, "36_54":  220546, "55_59":  427042, "60_plus":  608820, child1:  119114, child2plus:  111574 },

  "Plan COMUNIDAD_SC":  { grupo: "otros",   copagos: null , "18_25":  106252, "26_35":  136472, "36_54":  179603, "55_59":  304480, "60_plus":  525611, child1:   92544, child2plus:   79823 }
};
