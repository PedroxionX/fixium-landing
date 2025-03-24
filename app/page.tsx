import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Check,
  CreditCard,
  Download,
  Laptop,
  Phone,
  Server,
  Settings,
  ShieldCheck,
  Users,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Settings className="h-6 w-6" />
            <span className="text-xl font-bold">Fixium</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
              Características
            </Link>
            <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
              Precios
            </Link>
            <Link href="#download" className="text-sm font-medium transition-colors hover:text-primary">
              Descargar
            </Link>
            <Link href="#support" className="text-sm font-medium transition-colors hover:text-primary">
              Soporte
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Iniciar sesión
            </Button>
            <Button size="sm">Registrarse</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-24 sm:py-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <Badge className="w-fit" variant="outline">
                  Nuevo lanzamiento v1.0
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  La herramienta definitiva para talleres de reparación
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Diagnóstico de iPhone, gestión de inventario, administración de empleados y mucho más para optimizar
                  tu negocio de reparación de teléfonos.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="gap-2">
                  <Download className="h-4 w-4" />
                  Descargar ahora
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  Ver demostración
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-video overflow-hidden rounded-xl border bg-zinc-900 shadow-xl">
                <img
                  src="/placeholder.svg?height=720&width=1280"
                  alt="Dashboard de Fixium"
                  className="object-cover"
                  width={1280}
                  height={720}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="container py-16 sm:py-24">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Todo lo que necesitas para administrar tu taller
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Fixium combina todas las herramientas esenciales en una sola plataforma integral
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-zinc-800 bg-zinc-950/50">
              <CardHeader>
                <Phone className="h-10 w-10 mb-3" />
                <CardTitle>Diagnóstico avanzado</CardTitle>
                <CardDescription>
                  Diagnóstico completo para iPhones y otros dispositivos móviles con informes detallados.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-zinc-800 bg-zinc-950/50">
              <CardHeader>
                <Server className="h-10 w-10 mb-3" />
                <CardTitle>Gestión de inventario</CardTitle>
                <CardDescription>Control de stock, alertas de bajo inventario y seguimiento de piezas.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-zinc-800 bg-zinc-950/50">
              <CardHeader>
                <Users className="h-10 w-10 mb-3" />
                <CardTitle>Administración de empleados</CardTitle>
                <CardDescription>Gestión de horarios, rendimiento y acceso personalizado al sistema.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-zinc-800 bg-zinc-950/50">
              <CardHeader>
                <Laptop className="h-10 w-10 mb-3" />
                <CardTitle>Motor de ejecución local</CardTitle>
                <CardDescription>
                  Funciona en tu red local con sincronización a la nube para mayor seguridad.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-zinc-800 bg-zinc-950/50">
              <CardHeader>
                <ShieldCheck className="h-10 w-10 mb-3" />
                <CardTitle>Seguridad avanzada</CardTitle>
                <CardDescription>
                  Protección de datos, copias de seguridad automáticas y acceso protegido.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-zinc-800 bg-zinc-950/50">
              <CardHeader>
                <CreditCard className="h-10 w-10 mb-3" />
                <CardTitle>Facturación integrada</CardTitle>
                <CardDescription>Genera facturas, gestiona pagos y seguimiento financiero completo.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section id="pricing" className="container py-16 sm:py-24 bg-zinc-950/50 rounded-3xl my-16">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Planes adaptados a tu negocio
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Elige el plan que mejor se adapte a las necesidades de tu taller
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-zinc-800">
              <CardHeader>
                <CardTitle>Básico</CardTitle>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="ml-1 text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Diagnóstico básico de dispositivos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Gestión de inventario simple</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Hasta 2 empleados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Soporte por email</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Suscribirse</Button>
              </CardFooter>
            </Card>
            <Card className="border-zinc-800 relative before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-b before:from-zinc-500 before:to-zinc-950/0 before:p-[1px]">
              <CardHeader>
                <CardTitle>Profesional</CardTitle>
                <Badge className="w-fit mt-2" variant="secondary">
                  Recomendado
                </Badge>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$79</span>
                  <span className="ml-1 text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Diagnóstico avanzado de iPhones</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Gestión completa de inventario</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Hasta 10 empleados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Soporte prioritario</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Facturación integrada</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Suscribirse</Button>
              </CardFooter>
            </Card>
            <Card className="border-zinc-800">
              <CardHeader>
                <CardTitle>Empresarial</CardTitle>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$199</span>
                  <span className="ml-1 text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Diagnóstico y reparación avanzados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Gestión premium de inventario</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Empleados ilimitados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>Soporte 24/7</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>API personalizada y integraciones</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Contactar ventas</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <section id="download" className="container py-16 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex items-center justify-center">
              <div className="relative overflow-hidden rounded-xl border bg-zinc-900 shadow-xl p-8">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Aplicación Fixium"
                  className="object-cover"
                  width={600}
                  height={600}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Comienza a optimizar tu taller hoy mismo
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Descarga Fixium para Windows, macOS o Linux y transforma la gestión de tu taller de reparación con
                  nuestras potentes herramientas.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Button size="lg" className="gap-2">
                  <Download className="h-4 w-4" />
                  Windows
                </Button>
                <Button size="lg" className="gap-2">
                  <Download className="h-4 w-4" />
                  macOS
                </Button>
                <Button size="lg" className="gap-2">
                  <Download className="h-4 w-4" />
                  Linux
                </Button>
                <Button variant="outline" size="lg">
                  Ver requisitos del sistema
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">
                <p>Versión 1.0.0 | Actualizado el 24 de marzo de 2024</p>
                <p>
                  Al descargar, aceptas nuestros{" "}
                  <Link href="#" className="underline">
                    términos de servicio
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-zinc-950">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                <span className="text-lg font-bold">Fixium</span>
              </div>
              <p className="text-sm text-muted-foreground">
                La herramienta definitiva para talleres de reparación de dispositivos móviles.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Producto</h3>
              <ul className="grid gap-1 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:underline">
                    Características
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Descargar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Actualizaciones
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Soporte</h3>
              <ul className="grid gap-1 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:underline">
                    Documentación
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Guías
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Tutoriales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="grid gap-1 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:underline">
                    Términos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Licencias
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Fixium. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

