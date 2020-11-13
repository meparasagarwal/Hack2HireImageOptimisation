import React, { Fragment } from "react";

function Home() {
	return (
		<Fragment>
			<div class="container">
				<header class="page-header">
					<h4></h4>
					<h1>Upload Image</h1>
				</header>

				<form>
					<div class="row">
						<div class="col-sm-7 col-md-6 col-lg-5">
							<div class="form-group">
								<label for="file" class="sr-only">
									File
								</label>
								<div class="input-group">
									<input
										type="text"
										name="filename"
										class="form-control"
										placeholder="No file selected"
										readonly
									/>
									<span class="input-group-btn">
										<div class="btn btn-default  custom-file-uploader">
											<p></p>
											<input
												type="file"
												name="file"
												onchange="this.form.filename.value = this.files.length ? this.files[0].name : ''"
											/>
										</div>
									</span>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
			<br /> <br /> <br /> <br /> <br />
			<center>
				<h1>IMAGE GALLERY</h1>
			</center>
			<div class="gallery">
				<img src="http://c1.staticflickr.com/9/8450/8026519634_f33f3724ea_b.jpg" />
				<img src="http://c2.staticflickr.com/8/7218/7209301894_c99d3a33c2_h.jpg" />
				<img src="http://c2.staticflickr.com/8/7231/6947093326_df216540ff_b.jpg" />

				<img src="http://c1.staticflickr.com/9/8788/17367410309_78abb9e5b6_b.jpg" />
				<img src="http://c2.staticflickr.com/6/5814/20700286354_762c19bd3b_b.jpg" />
				<img src="http://c2.staticflickr.com/6/5647/21137202535_404bf25729_b.jpg" />

				<img src="http://c2.staticflickr.com/6/5588/14991687545_5c8e1a2e86_b.jpg" />
				<img src="http://c2.staticflickr.com/4/3888/14878097108_5997041006_b.jpg" />
				<img src="http://c2.staticflickr.com/8/7579/15482110477_0b0e9e5421_b.jpg" />
			</div>
		</Fragment>
	);
}

export default Home;
