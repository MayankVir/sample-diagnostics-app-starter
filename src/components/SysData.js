import React from 'react'
import "../App.css"
import "./SysData.css"

function SysData() {

	return (
		<>
		<div className="sysdata">
			<div className="cpu">
				<h2 className="cpu_heading">CPU</h2>
				<div className="name_arch">
					<div className="cpu_name box">
						<div className="cpu_name_heading">Name</div>
						<div className="cpu_name_content"></div>
					</div>
					<div className="cpu_arch box">
						<div className="cpu_arch_heading">Architecture</div>
						<div className="cpu_arch_content"></div>
					</div>
				</div>
				<div className="features_temp">
					<div className="cpu_features box">
						<div className="cpu_features_heading">Features</div>
						<div className="cpu_features_content"></div>
					</div>
					<div className="cpu_temp box">
						<div className="cpu_temp_heading">Temperature</div>
						<div className="cpu_temp_content"></div>
					</div>
				</div>
				<div className="visualisation box">
					<div className="cpu_processors">Processor Usage</div>
					<div className="cpu_processors_chart">
						
					</div>
				</div>

			</div>
			<div className="vertical_line"></div>
			<div className="horizontal_line_mobile"></div>
			<div className="storage_memory">
				<div className="storage">
					<div className="storage_heading">STORAGE</div>
					<div className="storage_content"></div>
				</div>
				<div className="horizontal_line"></div>
				<div className="memory">
					<div className="memory_heading">MEMORY</div>
					<div className="memory_content">
						<div className="memory_total box">
							<div className="memory_total_heading">Total</div>
							<div className="memory_total_content"></div>
						</div>
						<div className="memory_used_box">
							<div className="memory_used_heading">Used</div>
							<div className="memory_used_content"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<script type="module" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.1.0/chart.min.js"></script>
		<script src="https://requirejs.org/docs/release/2.3.6/r.js"></script>
		</>
	);
}

export default SysData
