import React from "react";
import { Line } from "react-chartjs-2";

function TotalCases({ report, selectedProvince }) {
  const date = report?.map((d) => d?.date);
  const total = report?.map((t) =>
    t?.total_cases === null ? 0 : t?.total_cases
  );
  const recoveries = report?.map((t) =>
    t?.total_recoveries === null ? 0 : t?.total_recoveries
  );
  const fatalities = report?.map((t) =>
    t?.total_fatalities === null ? 0 : t?.total_fatalities
  );
  const hospitalizations = report?.map((t) =>
    t?.total_hospitalizations === null ? 0 : t?.total_hospitalizations
  );
  const vaccinated = report?.map((t) =>
    t?.total_vaccinations === null ? 0 : t?.total_vaccinations
  );

  return report === [] ||
    total === [] ||
    recoveries === [] ||
    fatalities === [] ||
    hospitalizations === [] ||
    vaccinated === [] ? null : (
    <section className="ui card">
      <div className="content">
        <div className="header">
          Cumulative Count for {selectedProvince ? selectedProvince : "Canada"}
        </div>
      </div>
      <div className="content">
        <Line
          height={200}
          width={300}
          data={{
            labels: date,
            datasets: [
              {
                label: "Cases",
                data: total,
                backgroundColor: "rgba(39, 39, 223, 0.35)",
                borderWidth: 2,
                borderColor: "blue",
                pointRadius: 0,
              },
              {
                label: "Vaccinations",
                data: vaccinated,
                backgroundColor: "rgba(20,20,20,0.354)",
                borderWidth: 2,
                borderColor: "#141414",
                pointRadius: 0,
              },
              {
                label: "Deaths",
                data: fatalities,
                backgroundColor: "rgba(222, 79, 79, 0.35)",
                borderWidth: 2,
                borderColor: "red",
                pointRadius: 0,
                hidden: true,
              },
              {
                label: "Recoveries ",
                data: recoveries,
                backgroundColor: "rgba(36, 219, 36, 0.35)",
                borderWidth: 2,
                borderColor: "green",
                pointRadius: 0,
                hidden: true,
              },
              {
                label: "Hospitalizations",
                data: hospitalizations,
                backgroundColor: "rgba(230, 166, 47,0.354)",
                borderWidth: 2,
                borderColor: "orange",
                pointRadius: 0,
                hidden: true,
              },
            ],
          }}
          options={{
            width: "100%",
            height: "50vh",
            maintainAspectRatio: false,
            responsive: true,
            title: {
              display: false,
              text: "Cumulative Cases",
            },
            scales: {
              xAxes: [
                {
                  type: "time",
                  time: {
                    displayFormats: {
                      month: "MMM YY",
                    },
                  },
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 8,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 7,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 11,
                usePointStyle: true,
                padding: 15,
              },
            },
          }}
        />
      </div>
    </section>
  );
}

export default TotalCases;
