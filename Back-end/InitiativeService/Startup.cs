using AutoMapper;
using InitiativeService.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using InitiativeService.DTO.Mappers;
using InitiativeService.Services;
using Microsoft.OpenApi.Models;
using Swashbuckle.Swagger;


namespace InitiativeService
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers().AddNewtonsoftJson();
            services.AddDbContext<InitiativeContext>(opt => opt.UseSqlServer(Configuration.GetConnectionString("InitiativeConnection")));
            services.AddScoped<IInitiativeYearRepository, SqlInitiativeYearRepository>();
            services.AddScoped<IInitiativeRepository, SqlInitiativeRepository>();
            services.AddScoped<IInitiativeActionRepository, SqlInitiativeActionRepository>();
            services.AddScoped<IInitiativeService, Services.InitiativeService>();
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new InitiativeMapper());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            services.AddSingleton(mapper);

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Initiative Service API", Version = "v1" });
            });

            services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOrigins",
                    builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
            });


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseSwagger();

            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });

        }
    }
}
