var builder = WebApplication.CreateBuilder(args);

// Aqu� registrar�s tus servicios cuando los necesites
// builder.Services.AddControllers();

var app = builder.Build();

// Configuraci�n m�nima de pipeline
if (app.Environment.IsDevelopment())
{
  app.UseDeveloperExceptionPage();
  //app.UseSwagger();
  //app.UseSwaggerUI();
}

app.MapGet("/", () => "P4ReviewApp API - Backend en blanco listo para desarrollo");

app.Run();
