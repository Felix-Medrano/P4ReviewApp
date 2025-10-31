var builder = WebApplication.CreateBuilder(args);

// Aquí registrarás tus servicios cuando los necesites
// builder.Services.AddControllers();

var app = builder.Build();

// Configuración mínima de pipeline
if (app.Environment.IsDevelopment())
{
  app.UseDeveloperExceptionPage();
  //app.UseSwagger();
  //app.UseSwaggerUI();
}

app.MapGet("/", () => "P4ReviewApp API - Backend en blanco listo para desarrollo");

app.Run();
